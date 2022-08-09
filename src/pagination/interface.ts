export type handlePageNo =  (n: number) => void
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
    onChange?: handlePageNo
    onSizeChange?: () => void
    onJumpChange?: handlePageNo
    onPrevClick?: handlePageNo
    onNextClick?: handlePageNo
}
