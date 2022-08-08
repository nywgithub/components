import React from "react"
import classNames from "classnames"
import { PagerProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import Input from '../input'
const { InputNumber } = Input
const ForwardPagination: React.ForwardRefRenderFunction<unknown, PagerProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const {
        className,
        locale,
        style,
        type,
        total,
        pageNo,
        pageSize,
        showTotal,
        showJumpInput,
        showSizerSelect,
        hidePagerNum,
        itemRender,
        onChange,
        onSizeChange,
        onJumpChange,
        onPrevClick,
        onNextClick,
    } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("pagination", customizePrefixCls)

    const getTotalPage = (total: number, size: number) => {
        return Math.floor((total - 1) / size) + 1
    }

    const totalPage = getTotalPage(total, pageSize!)
    const Total = (
        <div className={`${prefixCls}-total-container`}>Total: {totalPage}</div>
    )
    const Jumper = <div className={`${prefixCls}-jump-container`}></div>
    const Sizer = <div className={`${prefixCls}-size-container`}></div>

    const pagerList: Array<React.ReactElement> = []

    const pagerChange = (n: number) => {
        console.log(n)
        setCurrent(n)
        onChange?.(n)
    }

    const [current, setCurrent] = React.useState<number>(pageNo!)

    const pagerNumCls = `${prefixCls}-pager-number`

    const renderPager = () => {
        for (let i = 0; i < totalPage; i++) {
            pagerList.push(
                <li
                    key={i}
                    className={`${prefixCls}-pager-item ${classNames({
                        current: current === i + 1,
                    })}`}
                    onClick={() => pagerChange(i + 1)}
                >
                    <div className={pagerNumCls}>{i + 1}</div>
                </li>
            )
        }
    }

    renderPager()

    const clickPrev = () => {
        if (current === 1){
            return
        }
        pagerChange(current - 1)
        onPrevClick?.(current)
    }

    const clickNext = () => {
        if(current === totalPage){
            return
        }
        pagerChange(current + 1)
        onNextClick?.(current)
    }

    const prevDom = (
        <div className={`${prefixCls}-pager-prev`} onClick={() => clickPrev()}>
            prev
        </div>
    )
    const nextDom = (
        <div className={`${prefixCls}-pager-next`} onClick={() => clickNext()}>
            next
        </div>
    )


    const defaultPager = (
        <>
            {showTotal ? Total : null}
            <div className={`${prefixCls}-pager-container`}>
                {prevDom}
                {pagerList}
                {nextDom}
            </div>
            {showJumpInput ? Jumper : null}
            {showSizerSelect ? Sizer : null}
        </>
    )

    const simplePager = (
        <>
            {prevDom}
            <div className={pagerNumCls}>
                {showJumpInput ? <InputNumber value={current} /> : current}
            </div>
            <span className={`${prefixCls}-slash`}>/</span>
            <div className={pagerNumCls}>{totalPage}</div>
            {nextDom}
        </>
    )

    return (
        hidePagerNum !== totalPage ? <div className={`${prefixCls} ${className || ""}`} style={style}>
            {type === "default" ? defaultPager : null}
            {type === "simple" ? simplePager : null}
        </div> : null
    )
}

const Pagination = React.forwardRef<unknown, PagerProps>(ForwardPagination)

Pagination.defaultProps = {
    pageNo: 1,
    pageSize: 10,
    type: "default",
}

export default Pagination
