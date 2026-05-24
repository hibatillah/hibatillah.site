"use client"

import { DescriptionList, DescriptionListItem } from "@registry/components/description-list"

export function DescriptionListDemo() {
	return (
		<DescriptionList className="w-full max-w-sm">
			<DescriptionListItem label="Name" value="M. Hibatillah" />
			<DescriptionListItem label="Role" value="Fullstack Developer" />
			<DescriptionListItem label="Stack" value="Next.js, TypeScript" />
			<DescriptionListItem label="Location" value="Indonesia" />
		</DescriptionList>
	)
}
