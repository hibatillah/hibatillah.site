"use client"

import { Badge } from "@/components/ui/badge"
import {
	DataTableFilter,
	useDataTableFilters,
} from "@registry/blocks/data-table-filter/data-table-filter"
import type { ColumnConfig } from "@registry/blocks/data-table-filter/core/types"
import type { FiltersState } from "@registry/blocks/data-table-filter/core/types"
import { CircleIcon, TextIcon } from "lucide-react"

type Row = { name: string; status: "active" | "inactive" | "pending" }

const data: Row[] = [
	{ name: "Invoice #001", status: "active" },
	{ name: "Invoice #002", status: "pending" },
	{ name: "Invoice #003", status: "inactive" },
	{ name: "Invoice #004", status: "active" },
	{ name: "Invoice #005", status: "active" },
	{ name: "Invoice #006", status: "pending" },
	{ name: "Invoice #007", status: "inactive" },
	{ name: "Invoice #008", status: "active" },
]

const columnsConfig = [
	{
		id: "name",
		accessor: (r: Row) => r.name,
		displayName: "Name",
		icon: TextIcon,
		type: "text",
	},
	{
		id: "status",
		accessor: (r: Row) => r.status,
		displayName: "Status",
		icon: CircleIcon,
		type: "option",
		options: [
			{ label: "Active", value: "active" },
			{ label: "Inactive", value: "inactive" },
			{ label: "Pending", value: "pending" },
		],
	},
] satisfies ReadonlyArray<ColumnConfig<Row, any, any, any>>

const statusVariant: Record<Row["status"], "default" | "secondary" | "outline"> = {
	active: "default",
	pending: "secondary",
	inactive: "outline",
}

function applyFilters(rows: Row[], filters: FiltersState): Row[] {
	if (filters.length === 0) return rows
	return rows.filter((row) => {
		for (const filter of filters) {
			if (filter.columnId === "name" && filter.values.length > 0) {
				const term = filter.values[0]
				if (term && !row.name.toLowerCase().includes(String(term).toLowerCase())) return false
			}
			if (filter.columnId === "status" && filter.values.length > 0) {
				if (!filter.values.includes(row.status)) return false
			}
		}
		return true
	})
}

export function DataTableFilterDemo() {
	const { columns, filters, actions, strategy } = useDataTableFilters({
		strategy: "client",
		data,
		columnsConfig,
	})

	const filteredRows = applyFilters(data, filters)

	return (
		<div className="w-full space-y-3">
			<DataTableFilter columns={columns} filters={filters} actions={actions} strategy={strategy} />

			<div className="overflow-hidden rounded-lg border text-sm">
				<table className="w-full">
					<thead>
						<tr className="border-b bg-muted/50">
							<th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
								Name
							</th>
							<th className="px-3 py-2 text-left text-xs font-medium text-muted-foreground">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredRows.length > 0 ? (
							filteredRows.map((row) => (
								<tr key={row.name} className="border-b last:border-0 hover:bg-muted/30">
									<td className="px-3 py-2 font-mono text-xs">{row.name}</td>
									<td className="px-3 py-2">
										<Badge variant={statusVariant[row.status]} className="capitalize">
											{row.status}
										</Badge>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan={2} className="px-3 py-8 text-center text-sm text-muted-foreground">
									No results
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	)
}
