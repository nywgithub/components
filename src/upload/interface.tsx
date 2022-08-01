import type * as React from "react"

import type { UploadProps as RcUploadProps } from "rc-upload"

import type { RcFile as RcFileProps } from "rc-upload/lib/interface"

export interface UploadProps extends RcUploadProps {}

export interface FileProps extends RcFileProps {}

export interface UploadListProps {
    prefixCls?: string
    fileList: Array<FileProps>
}

export interface ProgressProps {}

export interface ItemProps {
    prefixCls?: string
}
