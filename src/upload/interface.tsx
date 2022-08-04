import type * as React from "react"

// import type { UploadProps as RcUploadProps } from "rc-upload"

import type {
    RcFile as RcFileProps,
    BeforeUploadFileType,
    Action,
    UploadRequestMethod,
    UploadRequestHeader,
    UploadRequestOption,
    UploadProgressEvent,
} from "rc-upload/lib/interface"

//原生File类型

export interface InsertFileProps {
    percent?: number
    status?: string
    response?: Record<string, unknown>
    xhr?: XMLHttpRequest
    lastModifiedDate?: string
}
export interface FileProps extends Partial<RcFileProps>, Partial<InsertFileProps> {}

//封装rc-upload后新增字段
export interface ExtraUploadProps {
    prefixCls?: string
    type?: 'drag' | 'select'
    defaultFile?: Array<FileProps>
    listValue?: Array<FileProps>
    listType?: "picture" | "text" | "card"
    deleteIcon?: React.ReactNode
    itemRender?: false | ((file: FileProps, any) => React.ReactElement)
    fileLimit?: number
    onFileLimit?: (limit: number) => void
    fileSize?: number
    onFileSize?: (size: number) => void
    onChange?: (file: FileProps, fileList: FileProps[]) => void
    //和rc-upload同名，但已经覆盖
    onStart?: (file: FileProps) => void
    onError?: (
        error: Error,
        ret: Record<string, unknown>,
        file: FileProps
    ) => void
    onSuccess?: (
        response: Record<string, unknown>,
        file: FileProps,
        xhr: XMLHttpRequest
    ) => void
    onProgress?: (event: UploadProgressEvent, file: FileProps) => void
    beforeUpload?: (
        file: FileProps,
        FileList: FileProps[]
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
        | ((file: FileProps | string | Blob) => Record<string, unknown>)
    headers?: UploadRequestHeader
    accept?: string
    multiple?: boolean
    customRequest?: (option: UploadRequestOption) => void
    withCredentials?: boolean
    openFileDialogOnClick?: boolean
}

export interface UploadProps extends ExtraUploadProps, KeepUploadProps {}

export interface UploadListProps {
    prefixCls: string
    fileList: Array<FileProps>
    listType?: string
    deleteIcon?: React.ReactNode
    deleteItem?: (file: FileProps) => void
    itemRender?: false | ((file: FileProps, any) => React.ReactElement)
}

export interface ProgressProps {
    prefixCls?: string
    percent?: number
}

export interface ItemProps {
    prefixCls: string
    file: FileProps
    listType?: string
    deleteIcon?: React.ReactNode
    deleteItem?: (file: FileProps) => void
    itemRender?: false | ((file: FileProps, any) => React.ReactElement)
}
