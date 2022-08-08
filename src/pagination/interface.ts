export interface PagerProps {
    prefixCls?: string
    locale?: 'en' | 'cn'
    className?: string
    style?: string
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
    onPrevClick?: () => void
    onNextClick?: () => void
}
