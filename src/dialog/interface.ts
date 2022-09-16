export interface DialogProps {
    prefixCls?: string
    style?: any
    className?: string
    children?: React.ReactNode
    visible?: boolean
    delay?: number
    mask?: boolean
    title?: React.ReactNode
    footer?: boolean | React.ReactNode
    closeIcon?: boolean | React.ReactNode
    closeOnClickMask?: boolean
    closeByEsc?: boolean
    NoScroll?: boolean
    onClose?: () => void
    onClosed?: () => void
    onOpen?: () => void
    onOpened?: () => void
    onCancel?: () => void
    onConfirm?: () => void
}
