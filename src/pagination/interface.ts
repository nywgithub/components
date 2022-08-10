export type handlePageNo = (n: number) => void
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
    itemRender?: {
        prevNode?: (current: number) => React.ReactNode
        nextNode?: (current: number) => React.ReactNode
        totalNode?: (totalPage: number) => React.ReactNode
        pagerNode?: (num: number) => React.ReactNode
    }
    onChange?: handlePageNo
    onSizeChange?: () => void
    onJumpChange?: handlePageNo
    onPrevClick?: handlePageNo
    onNextClick?: handlePageNo
}
