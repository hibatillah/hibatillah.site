"use client"

import { AndroidIcon } from "@/components/ui/svgs/androidIcon"
import { Authjs } from "@/components/ui/svgs/authjs"
import { Dotnet } from "@/components/ui/svgs/dotnet"
import { Expressjs } from "@/components/ui/svgs/expressjs"
import { ExpressjsDark } from "@/components/ui/svgs/expressjsDark"
import { Figma } from "@/components/ui/svgs/figma"
import { Firebase } from "@/components/ui/svgs/firebase"
import { FlaskDark } from "@/components/ui/svgs/flaskDark"
import { FlaskLight } from "@/components/ui/svgs/flaskLight"
import { Jquery } from "@/components/ui/svgs/jquery"
import { JqueryDark } from "@/components/ui/svgs/jqueryDark"
import { Kotlin } from "@/components/ui/svgs/kotlin"
import { Laravel } from "@/components/ui/svgs/laravel"
import { MongodbIconDark } from "@/components/ui/svgs/mongodbIconDark"
import { MongodbIconLight } from "@/components/ui/svgs/mongodbIconLight"
import { MysqlIconDark } from "@/components/ui/svgs/mysqlIconDark"
import { MysqlIconLight } from "@/components/ui/svgs/mysqlIconLight"
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark"
import { Nodejs } from "@/components/ui/svgs/nodejs"
import { Postgresql } from "@/components/ui/svgs/postgresql"
import { Prisma } from "@/components/ui/svgs/prisma"
import { PrismaDark } from "@/components/ui/svgs/prismaDark"
import { Python } from "@/components/ui/svgs/python"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { ShadcnUi } from "@/components/ui/svgs/shadcnUi"
import { ShadcnUiDark } from "@/components/ui/svgs/shadcnUiDark"
import { SqlServer } from "@/components/ui/svgs/sqlServer"
import { Tailwindcss } from "@/components/ui/svgs/tailwindcss"
import { Typescript } from "@/components/ui/svgs/typescript"
import { cn } from "@/lib/utils"
import { Tooltip } from "@base-ui/react/tooltip"
import { type SVGProps, useState } from "react"

type LogoComponent = (props: SVGProps<SVGSVGElement>) => React.ReactNode

interface LogoEntry {
	light: LogoComponent
	/** Theme-specific variant; when present, light/dark toggle via `dark:`. */
	dark?: LogoComponent
	/** Extra classes for single-variant logos (e.g. `dark:invert` for pure-black marks). */
	className?: string
}

/**
 * Stack name (lowercased to match MDX frontmatter) → svgl logo(s).
 * Stacks without an svgl logo (e.g. Inertia.js, Midtrans) are intentionally absent and render nothing.
 */
const STACK_LOGOS: Record<string, LogoEntry> = {
	react: { light: ReactLight, dark: ReactDark },
	"next.js": { light: NextjsIconDark, className: "dark:invert" },
	typescript: { light: Typescript },
	"node.js": { light: Nodejs },
	"express.js": { light: Expressjs, dark: ExpressjsDark },
	"tailwind css": { light: Tailwindcss },
	"shadcn ui": { light: ShadcnUi, dark: ShadcnUiDark },
	laravel: { light: Laravel, className: "dark:invert" },
	mongodb: { light: MongodbIconLight, dark: MongodbIconDark },
	mysql: { light: MysqlIconLight, dark: MysqlIconDark },
	postgresql: { light: Postgresql },
	"prisma orm": { light: Prisma, dark: PrismaDark },
	"sql server": { light: SqlServer },
	python: { light: Python },
	flask: { light: FlaskLight, dark: FlaskDark },
	firebase: { light: Firebase },
	figma: { light: Figma },
	kotlin: { light: Kotlin },
	android: { light: AndroidIcon },
	jquery: { light: Jquery, dark: JqueryDark },
	nextauth: { light: Authjs },
	"asp.net": { light: Dotnet },
}

const ICON = "size-5 grayscale contrast-125"

const POPUP =
	"z-50 w-fit origin-(--transform-origin) whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs text-background transition-[width,height] duration-[400ms] ease-out data-instant:transition-none data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95"

export function StackLogos({ stacks }: { stacks: string[] }) {
	const [handle] = useState(() => Tooltip.createHandle<string>())

	const logos = stacks
		.map((name) => ({ name, entry: STACK_LOGOS[name.toLowerCase()] }))
		.filter((item): item is { name: string; entry: LogoEntry } => Boolean(item.entry))

	if (!logos.length) return null

	return (
		<Tooltip.Provider delay={0} closeDelay={0}>
			<ul className="-mx-1 flex flex-wrap items-center">
				{logos.map(({ name, entry }) => {
					const Light = entry.light
					const Dark = entry.dark

					return (
						<li key={name}>
							<Tooltip.Trigger
								handle={handle}
								payload={name}
								aria-label={name}
								tabIndex={-1}
								className="flex items-center justify-center p-1"
							>
								{Dark ? (
									<>
										<Light aria-hidden className={cn(ICON, entry.className, "dark:hidden")} />
										<Dark aria-hidden className={cn(ICON, entry.className, "hidden dark:block")} />
									</>
								) : (
									<Light aria-hidden className={cn(ICON, entry.className)} />
								)}
							</Tooltip.Trigger>
						</li>
					)
				})}
			</ul>

			<Tooltip.Root handle={handle}>
				{({ payload }) => (
					<Tooltip.Portal>
						<Tooltip.Positioner
							side="top"
							align="center"
							sideOffset={6}
							className="isolate z-50 transition-[top,left,transform] duration-200 ease-out data-instant:transition-none"
						>
							<Tooltip.Popup className={POPUP}>{payload}</Tooltip.Popup>
						</Tooltip.Positioner>
					</Tooltip.Portal>
				)}
			</Tooltip.Root>
		</Tooltip.Provider>
	)
}
