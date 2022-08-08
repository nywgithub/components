import React from "react"
import classNames from "classnames"
import { PagerProps } from "./interface"
import { ConfigContext } from "../common-provider/context"

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

    const clickPager = (n: number) => {
        setCurrent(n)
        onChange?.(n)
    }

    const [current, setCurrent] = React.useState<number>(pageNo!)

    const renderPager = () => {
        for (let i = 0; i < totalPage; i++) {
            pagerList.push(
                <li
                    key={i}
                    className={`${prefixCls}-pager-item ${classNames({
                        current: current === (i + 1),
                    })}`}
                    onClick={() => clickPager(i + 1)}
                >
                    {i + 1}
                </li>
            )
        }
    }

    renderPager()

    return (
        <div className={prefixCls}>
            {showTotal ? Total : null}
            <div className={`${prefixCls}-pager-container`}>{pagerList}</div>
            {showJumpInput ? Jumper : null}
            {showSizerSelect ? Sizer : null}
        </div>
    )
}

const Pagination = React.forwardRef<unknown, PagerProps>(ForwardPagination)

Pagination.defaultProps = {
    pageNo: 1,
    pageSize: 10,
    type: "default",
}

export default Pagination
