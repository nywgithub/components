export interface PopOverProps {
    prefixCls?: string
    style?: any
    className?: string
    onClose?: (e: KeyboardEvent) => void
    closeByEsc?: boolean
    container: Element | string
    trigger?: "click" | "focus" | "hover"
    triggerEvent?: any
    target?: React.ReactNode
}
