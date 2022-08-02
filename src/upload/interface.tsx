import type * as React from "react"

import type { UploadProps as RcUploadProps } from "rc-upload"

import type { RcFile as RcFileProps } from "rc-upload/lib/interface"

//封装rc-upload后新增字段
export interface ExtraUploadProps {
    defaultFile?: Array<FileProps>
    listValue?: Array<FileProps>
    listType?: "picture" | "text" | "card"
    deleteIcon?: React.ReactNode
    itemRender?: () => void
    fileLimit?: number
    onFileLimit?: () => void
    fileSize?: number
    onFileSize?: () => void
}

export interface UploadProps extends RcUploadProps, ExtraUploadProps {}

//原生File类型
export interface FileProps extends RcFileProps {}

export interface UploadListProps {
    prefixCls: string
    fileList: Array<FileProps>
    listType?: string
    deleteIcon?: React.ReactNode
    deleteItem?: (file: FileProps) => void
    itemRender?: () => void
}

export interface ProgressProps {}

export interface ItemProps {
    prefixCls: string
    file: FileProps
    listType?: string
    deleteIcon?: React.ReactNode
    deleteItem?: (file: FileProps) => void
    itemRender?: () => void
}
