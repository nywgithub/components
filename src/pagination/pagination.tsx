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

    //当前实时页码
    const [current, setCurrent] = React.useState<number>(pageNo!)

    //仅用于展示jump输入框的值
    const [currentInput, setCurrentInput] = React.useState<number>(pageNo!)

    const handleChange = (n: number, callback: (n: number) => void) => {
        if (n < 1) return callback(1)
        if (n > totalPage) return callback(totalPage)
        callback(n)
    }

    const pagerChange = (n: number) => {
        handleChange(n, (val) => {
            setCurrent(val)
            onChange?.(val)
        })
    }

    const pagerChange_Input = (n: number) => {
        handleChange(n, (val) => {
            setCurrentInput(val)
            onJumpChange?.(val)
        })
    }

    const pagerNumCls = `${prefixCls}-paper-number`

    const renderPager = () => {
        for (let i = 0; i < totalPage; i++) {
            pagerList.push(
                <li
                    key={i}
                    className={`${prefixCls}-paper-item ${classNames({
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
        pagerChange(current - 1)
        pagerChange_Input(current - 1)
        onPrevClick?.(current)
    }

    const clickNext = () => {
        pagerChange(current + 1)
        pagerChange_Input(current + 1)
        onNextClick?.(current)
    }

    const prevDom = (
        <div
            className={classNames(`${prefixCls}-paper-prev`, {
                [`${prefixCls}-disabled`]: current === 1,
            })}
            onClick={() => clickPrev()}
        >
            prev
        </div>
    )
    const nextDom = (
        <div
            className={classNames(`${prefixCls}-paper-next`, {
                [`${prefixCls}-disabled`]: current === totalPage,
            })}
            onClick={() => clickNext()}
        >
            next
        </div>
    )

    const defaultPager = (
        <>
            {showTotal ? Total : null}
            <div className={`${prefixCls}-paper-container`}>
                {prevDom}
                {pagerList}
                {nextDom}
            </div>
            {showJumpInput ? Jumper : null}
            {showSizerSelect ? Sizer : null}
        </>
    )

    const inputRef = React.useRef(null)

    const handleKeyDown = (e) => {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault()
        }
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            pagerChange(currentInput)
            onJumpChange?.(currentInput)
        }
        if (e.key === "ArrowUp") {
            pagerChange_Input(current + 1)
        }

        if (e.key === "ArrowDown") {
            pagerChange_Input(current - 1)
        }

        if (!isNaN(Number(e.key))) {
            pagerChange_Input(Number(e.key))
        }
    }

    const handleInputChange = (e) => {
        const value = e.target.value
        if (!isNaN(Number(value))) {
            setCurrentInput(value)
        }
    }

    const handleBlur = (e) => {
        if (!currentInput){
           return setCurrentInput(current)
        } 
        pagerChange(currentInput)
        onJumpChange?.(currentInput)
    }

    const simplePager = (
        <>
            {prevDom}
            <div className={pagerNumCls}>
                {showJumpInput ? (
                    <input
                        type="text"
                        value={currentInput}
                        onKeyDown={handleKeyDown}
                        onKeyUp={handleKeyUp}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        size={3}
                    />
                ) : (
                    current
                )}
            </div>
            <span className={`${prefixCls}-slash`}>/</span>
            <div className={pagerNumCls}>{totalPage}</div>
            {nextDom}
        </>
    )

    return hidePagerNum !== totalPage ? (
        <div
            className={`${prefixCls} ${className || ""} ${classNames({
                simple: type === "simple",
            })}`}
            style={style}
        >
            {type === "default" ? defaultPager : null}
            {type === "simple" ? simplePager : null}
        </div>
    ) : null
}

const Pagination = React.forwardRef<unknown, PagerProps>(ForwardPagination)

Pagination.defaultProps = {
    pageNo: 1,
    pageSize: 10,
    type: "default",
}

export default Pagination
