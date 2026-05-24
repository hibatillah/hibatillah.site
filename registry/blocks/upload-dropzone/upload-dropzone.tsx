import type { UploadHookControl } from "@better-upload/client"
import { FileTextIcon, Upload } from "lucide-react"
import { useId } from "react"
import { useDropzone } from "react-dropzone"

import { cn } from "@/lib/utils"

import { Progress } from "@/components/ui/progress"
import { formatFileSize } from "./lib/utils"

type UploadDropzoneProps = {
	control: UploadHookControl<true>
	id?: string
	accept?: string
	className?: string
	metadata?: Record<string, unknown>
	description?:
		| {
				fileTypes?: string
				maxFileSize?: string
				maxFiles?: number
		  }
		| string
	uploadOverride?: (...args: Parameters<UploadHookControl<true>["upload"]>) => void
}

export function UploadDropzone({
	control: { upload, isPending, progresses },
	id: _id,
	accept,
	className,
	metadata,
	description,
	uploadOverride,
}: UploadDropzoneProps) {
	const id = useId()

	const { getRootProps, getInputProps, isDragActive, inputRef } = useDropzone({
		onDrop: (files) => {
			if (files.length > 0 && !isPending) {
				if (uploadOverride) {
					uploadOverride(files, { metadata })
				} else {
					upload(files, { metadata })
				}
			}
			inputRef.current.value = ""
		},
		noClick: true,
	})

	if (progresses.length > 0) {
		return (
			<div className={cn("space-y-2", className)}>
				{progresses.map((file) => (
					<div
						key={file.objectInfo.key || file.name}
						className="flex overflow-hidden rounded-lg border bg-card"
					>
						<div className="flex w-12 shrink-0 items-center justify-center self-stretch bg-muted">
							<FileTextIcon className="size-5 text-primary" />
						</div>
						<div className="flex min-w-0 flex-1 items-center gap-4 py-3 pr-[14px] pl-4">
							<div className="min-w-0 flex-1">
								<p className="truncate text-sm">{file.name}</p>
								{file.status === "complete" ? (
									<p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
								) : file.status === "failed" ? (
									<p className="text-xs text-destructive">Upload gagal</p>
								) : (
									<div className="mt-1.5 space-y-1">
										<Progress value={Math.round(file.progress * 100)} />
										<p className="text-xs text-muted-foreground">
											{Math.round(file.progress * 100)}%
										</p>
									</div>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}

	return (
		<div
			className={cn(
				"relative rounded-lg border border-dashed border-input text-foreground transition-colors",
				{ "border-primary/80": isDragActive },
				className,
			)}
		>
			<label
				{...getRootProps()}
				className={cn(
					"flex w-full min-w-72 cursor-pointer items-center justify-center gap-4 rounded-lg bg-transparent p-6 transition-colors",
					{
						"hover:bg-neutral-100 dark:hover:bg-neutral-800": true,
						"opacity-0": isDragActive,
					},
				)}
				htmlFor={_id || id}
			>
				<Upload className="size-6 stroke-[1.5] text-foreground" />

				<div className="space-y-px">
					<div className="text-sm">Drag dan drop files disini</div>
					<p className="text-xs text-muted-foreground">
						{typeof description === "string" ? (
							description
						) : (
							<>
								{description?.maxFiles && `Upload hingga ${description.maxFiles} file`}

								{description?.maxFileSize && (
									<span>
										Maksimal <span className="text-foreground">{description.maxFileSize}</span> per
										file
									</span>
								)}
								{description?.fileTypes && (
									<span className="ml-1">
										- File format <span className="text-foreground">{description.fileTypes}</span>
									</span>
								)}
							</>
						)}
					</p>
				</div>

				<input {...getInputProps()} type="file" multiple id={_id || id} accept={accept} />
			</label>

			{isDragActive && (
				<div className="pointer-events-none absolute inset-0 rounded-lg">
					<div className="flex size-full items-center justify-center gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-800">
						<Upload className="size-6 stroke-[1.5] text-foreground" />
						<div className="text-sm">Drop file disini</div>
					</div>
				</div>
			)}
		</div>
	)
}
