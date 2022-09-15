export interface CheckBoxProps {
    prefixCls?: string
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
    onChange?: (e: any) => void
    checked?: boolean
    disabled?: boolean
    value?: any
}

export interface CheckGroupProps {
    prefixCls?: string
    style?: React.CSSProperties
    className?: string
    children?: React.ReactNode
    onChange?: (e: any) => void
    disabled?: boolean
    value?: Array<any>
}
