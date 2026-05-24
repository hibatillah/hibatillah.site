import { Dialog as DialogPrimitive } from "@base-ui/react/dialog"
import * as React from "react"
import { Drawer as DrawerPrimitive } from "vaul"

import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { DrawerContent, DrawerDescription, DrawerTitle } from "@/components/ui/drawer"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

const MOBILE_BREAKPOINT = 640

interface ResponsiveDialogContextValue {
	isMobile: boolean
	open: boolean
	onOpenChange: (open: boolean) => void
}

const ResponsiveDialogContext = React.createContext<ResponsiveDialogContextValue>({
	isMobile: false,
	open: false,
	onOpenChange: () => {},
})

function useResponsiveDialog() {
	return React.useContext(ResponsiveDialogContext)
}

interface ResponsiveDialogProps {
	open?: boolean
	defaultOpen?: boolean
	onOpenChange?: (open: boolean) => void
	children?: React.ReactNode
	nested?: boolean
}

function ResponsiveDialog({
	open: openProp,
	defaultOpen = false,
	onOpenChange: onOpenChangeProp,
	children,
	nested = false,
}: ResponsiveDialogProps) {
	const isMobile = useIsMobile(MOBILE_BREAKPOINT)
	const [internalOpen, setInternalOpen] = React.useState(defaultOpen)

	const isControlled = openProp !== undefined
	const open = isControlled ? openProp : internalOpen

	const handleOpenChange = React.useCallback(
		(value: boolean) => {
			if (!isControlled) setInternalOpen(value)
			onOpenChangeProp?.(value)
		},
		[isControlled, onOpenChangeProp],
	)

	const ctx = React.useMemo(
		() => ({ isMobile, open, onOpenChange: handleOpenChange }),
		[isMobile, open, handleOpenChange],
	)

	return (
		<ResponsiveDialogContext.Provider value={ctx}>
			{isMobile ? (
				nested ? (
					<DrawerPrimitive.NestedRoot open={open} onOpenChange={handleOpenChange} noBodyStyles>
						{children}
					</DrawerPrimitive.NestedRoot>
				) : (
					<DrawerPrimitive.Root open={open} onOpenChange={handleOpenChange} noBodyStyles>
						{children}
					</DrawerPrimitive.Root>
				)
			) : (
				<DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
					{children}
				</DialogPrimitive.Root>
			)}
		</ResponsiveDialogContext.Provider>
	)
}

function ResponsiveDialogTrigger({
	asChild = false,
	children,
	...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
	const { isMobile, onOpenChange } = useResponsiveDialog()

	if (isMobile) {
		return (
			<DrawerPrimitive.Trigger asChild={asChild} data-slot="responsive-dialog-trigger" {...props}>
				{children}
			</DrawerPrimitive.Trigger>
		)
	}

	if (asChild && React.isValidElement(children)) {
		const child = children as React.ReactElement<{
			onClick?: (e: React.MouseEvent) => void
		}>
		return React.cloneElement(child, {
			onClick: (e: React.MouseEvent) => {
				child.props.onClick?.(e)
				onOpenChange(true)
			},
		})
	}

	return (
		<button
			type="button"
			data-slot="responsive-dialog-trigger"
			onClick={() => onOpenChange(true)}
			{...props}
		>
			{children}
		</button>
	)
}

function ResponsiveDialogClose({
	asChild = false,
	children,
	...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
	const { isMobile, onOpenChange } = useResponsiveDialog()

	if (isMobile) {
		return (
			<DrawerPrimitive.Close asChild={asChild} data-slot="responsive-dialog-close" {...props}>
				{children}
			</DrawerPrimitive.Close>
		)
	}

	if (asChild && React.isValidElement(children)) {
		const child = children as React.ReactElement<{
			onClick?: (e: React.MouseEvent) => void
		}>
		return React.cloneElement(child, {
			onClick: (e: React.MouseEvent) => {
				child.props.onClick?.(e)
				onOpenChange(false)
			},
		})
	}

	return (
		<button
			type="button"
			data-slot="responsive-dialog-close"
			onClick={() => onOpenChange(false)}
			{...props}
		>
			{children}
		</button>
	)
}

function ResponsiveDialogContent({
	className,
	children,
	showCloseButton = true,
	autoFocus = true,
}: {
	className?: string
	children?: React.ReactNode
	showCloseButton?: boolean
	autoFocus?: boolean
}) {
	const { isMobile } = useResponsiveDialog()

	if (isMobile) {
		return (
			<DrawerContent autoFocus={autoFocus} className={cn("px-4 pb-0", className)}>
				{children}
			</DrawerContent>
		)
	}

	return (
		<DialogContent
			autoFocus={autoFocus}
			showCloseButton={showCloseButton}
			className={cn(className)}
		>
			{children}
		</DialogContent>
	)
}

function ResponsiveDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div
			data-slot="responsive-dialog-header"
			className={cn("flex shrink-0 flex-col gap-1.5", className)}
			{...props}
		/>
	)
}

function ResponsiveDialogFooter({ className, children, ...props }: React.ComponentProps<"div">) {
	const { isMobile } = useResponsiveDialog()
	const childCount = React.Children.toArray(children).length

	if (isMobile) {
		return (
			<div
				data-slot="responsive-dialog-footer"
				className={cn(
					"-mx-4 flex flex-col gap-2 border-t bg-muted/50 px-4 pt-3 pb-[calc(1.5rem+env(safe-area-inset-bottom))]",
					className,
				)}
				{...props}
			>
				{children}
			</div>
		)
	}

	return (
		<div
			data-slot="responsive-dialog-footer"
			className={cn(
				"-mx-4 -mb-4 flex flex-col gap-2 border-t bg-muted/50 px-4 py-3 sm:flex-row",
				childCount === 1 ? "sm:justify-end" : "sm:justify-between",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

function ResponsiveDialogTitle({
	className,
	...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
	const { isMobile } = useResponsiveDialog()

	if (isMobile) {
		return (
			<DrawerTitle className={cn("text-lg leading-none font-semibold", className)} {...props} />
		)
	}

	return <DialogTitle className={cn("text-lg leading-none font-semibold", className)} {...props} />
}

function ResponsiveDialogDescription({ className, ...props }: React.ComponentProps<"p">) {
	const { isMobile } = useResponsiveDialog()

	if (isMobile) {
		return (
			<DrawerDescription
				className={cn("text-sm text-pretty text-muted-foreground", className)}
				{...props}
			/>
		)
	}

	return (
		<DialogDescription
			className={cn("text-sm text-pretty text-muted-foreground", className)}
			{...props}
		/>
	)
}

export {
	ResponsiveDialog,
	ResponsiveDialogClose,
	ResponsiveDialogContent,
	ResponsiveDialogDescription,
	ResponsiveDialogFooter,
	ResponsiveDialogHeader,
	ResponsiveDialogTitle,
	ResponsiveDialogTrigger,
}
