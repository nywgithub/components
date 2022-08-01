import type * as React from "react"

import type { UploadProps as RcUploadProps } from "rc-upload"

import type { RcFile as RcFileProps } from "rc-upload/lib/interface"

export interface UploadProps extends RcUploadProps {}

//原生File类型
export interface FileProps extends RcFileProps {}

export interface UploadListProps {
    prefixCls: string
    fileList: Array<FileProps>
}

export interface ProgressProps {}

export interface ItemProps {
    prefixCls: string
    file: FileProps
    type?: string
    renderItem?: () => void
}
