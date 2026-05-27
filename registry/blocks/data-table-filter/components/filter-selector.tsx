import { Button } from "@/components/ui/button"
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { FilterIcon } from "lucide-react"
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import type {
	Column,
	ColumnDataType,
	DataTableFilterActions,
	FilterStrategy,
	FiltersState,
} from "../core/types"
import { getColumn } from "../lib/helpers"
import { type Locale, t } from "../lib/i18n"
import { FilterValueController } from "./filter-value"

interface FilterSelectorProps<TData> {
	filters: FiltersState
	columns: Column<TData>[]
	actions: DataTableFilterActions
	strategy: FilterStrategy
	locale?: Locale
}

export const FilterSelector = memo(__FilterSelector) as typeof __FilterSelector

function __FilterSelector<TData>({
	filters,
	columns,
	actions,
	strategy,
	locale = "en",
}: FilterSelectorProps<TData>) {
	const [open, setOpen] = useState(false)
	const [property, setProperty] = useState<string | undefined>(undefined)

	const column = property ? getColumn(columns, property) : undefined
	const filter = property ? filters.find((f) => f.columnId === property) : undefined

	const hasFilters = filters.length > 0

	const content = useMemo(
		() =>
			property && column ? (
				<FilterValueController
					filter={filter!}
					column={column as Column<TData, ColumnDataType>}
					actions={actions}
					strategy={strategy}
					locale={locale}
				/>
			) : (
				<Command loop>
					<div className="border-b px-2 py-1.5">
						<span className="text-sm text-muted-foreground">{t("filter", locale)}</span>
					</div>
					<CommandList className="max-h-fit">
						<CommandGroup>
							{columns.map((col) => (
								<FilterableColumn key={col.id} column={col} setProperty={setProperty} />
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			),
		[property, column, filter, columns, actions, strategy, locale],
	)

	return (
		<Popover
			open={open}
			onOpenChange={async (value) => {
				setOpen(value)
				if (!value) setTimeout(() => setProperty(undefined), 100)
			}}
		>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						className={cn(
							"bg-card hover:bg-card/90 focus:bg-card/90 active:bg-card/90",
							!hasFilters && "max-sm:w-full",
							hasFilters && "w-fit px-2!",
						)}
					>
						<FilterIcon className="size-4" />
						{!hasFilters && <span>{t("filter", locale)}</span>}
					</Button>
				}
			/>
			<PopoverContent
				align="start"
				side="bottom"
				className="w-fit origin-(--radix-popover-content-transform-origin) bg-background p-0"
			>
				{content}
			</PopoverContent>
		</Popover>
	)
}

export function FilterableColumn<TData, TType extends ColumnDataType, TVal>({
	column,
	setProperty,
}: {
	column: Column<TData, TType, TVal>
	setProperty: (value: string) => void
}) {
	const itemRef = useRef<HTMLDivElement>(null)

	const prefetch = useCallback(() => {
		column.prefetchOptions()
		column.prefetchValues()
		column.prefetchFacetedUniqueValues()
		column.prefetchFacetedMinMaxValues()
	}, [column])

	useEffect(() => {
		const target = itemRef.current

		if (!target) return

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === "attributes") {
					const isSelected = target.getAttribute("data-selected") === "true"
					if (isSelected) prefetch()
				}
			}
		})

		observer.observe(target, {
			attributes: true,
			attributeFilter: ["data-selected"],
		})

		return () => observer.disconnect()
	}, [prefetch])

	return (
		<CommandItem
			ref={itemRef}
			value={column.id}
			keywords={[column.displayName]}
			onSelect={() => setProperty(column.id)}
			className="group"
			onMouseEnter={prefetch}
		>
			<div className="inline-flex items-center gap-1.5">
				{<column.icon strokeWidth={2.25} className="size-4" />}
				<span>{column.displayName}</span>
			</div>
		</CommandItem>
	)
}
