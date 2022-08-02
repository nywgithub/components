import type * as React from "react"

// import type { UploadProps as RcUploadProps } from "rc-upload"

import type {
    RcFile as RcFileProps,
    BeforeUploadFileType,
    Action,
    UploadRequestMethod,
    UploadRequestHeader,
    UploadRequestOption,
} from "rc-upload/lib/interface"

//封装rc-upload后新增字段
export interface ExtraUploadProps {
    prefixCls?: string
    defaultFile?: Array<FileProps>
    listValue?: Array<FileProps>
    listType?: "picture" | "text" | "card"
    deleteIcon?: React.ReactNode
    itemRender?: () => void
    fileLimit?: number
    onFileLimit?: () => void
    fileSize?: number
    onFileSize?: (size: number) => void
    onChange?: (file: RcFileProps, fileList: RcFileProps[]) => void
    //和rc-upload同名，但已经覆盖
    onStart?: (file: RcFileProps) => void
    onError?: (
        error: Error,
        ret: Record<string, unknown>,
        file: RcFileProps
    ) => void
    onSuccess?: (
        response: Record<string, unknown>,
        file: RcFileProps,
        xhr: XMLHttpRequest
    ) => void
    beforeUpload?: (
        file: RcFileProps,
        FileList: RcFileProps[]
    ) => BeforeUploadFileType | Promise<void | BeforeUploadFileType>
}

export interface KeepUploadProps {
    name?: string
    disabled?: boolean
    component?: React.JSXElementConstructor<any>
    action?: Action
    method?: UploadRequestMethod
    directory?: boolean
    data?:
        | Record<string, unknown>
        | ((file: RcFileProps | string | Blob) => Record<string, unknown>)
    headers?: UploadRequestHeader
    accept?: string
    multiple?: boolean
    customRequest?: (option: UploadRequestOption) => void
    withCredentials?: boolean
    openFileDialogOnClick?: boolean
}

export interface UploadProps extends ExtraUploadProps, KeepUploadProps {}

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
