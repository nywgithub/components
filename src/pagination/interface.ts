export interface PagerProps {
    prefixCls?: string
    locale?: "en" | "cn"
    className?: string
    style?: React.CSSProperties
    type?: "default" | "simple"
    total: number
    pageNo?: number
    pageSize?: number
    showTotal?: boolean
    showJumpInput?: boolean
    showSizerSelect?: boolean
    hidePagerNum?: number
    itemRender?: () => void
    onChange?: (val: number) => void
    onSizeChange?: () => void
    onJumpChange?: () => void
    onPrevClick?: (val:number) => void
    onNextClick?: (val:number) => void
}
