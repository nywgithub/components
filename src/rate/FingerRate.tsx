import React, { useEffect, useState } from "react"
export interface FingerRateProps {
    character?: Array<
        React.ReactNode | ((props: FingerRateProps) => React.ReactNode) | string
    >
    className?: string
    style?: React.CSSProperties
    defaultValue?: number
    disabled?: boolean
    onClick?: (
        e:
            | React.MouseEvent<HTMLDivElement>
            | React.KeyboardEvent<HTMLDivElement>,
        value?: boolean,
        key?: number
    ) => void
}
const reverse = (num: number | undefined) => {
    if (num === 0 || num === 1) {
        return ~num + 2
    } else {
        return 99
    }
}

const FingerRate: React.FC<FingerRateProps> = (props) => {
    const { character, className, disabled, onClick, defaultValue } = props
    const [currentKey, setCurrentKey] = useState(defaultValue)
    let characters: Array<React.ReactNode> = []

    const getCurrentList = () => {
        let initList = character!.map((e) => {
            const obj = { el: e, value: false }

            if (reverse(defaultValue)) {
                obj.value = true
            }
            return obj
        })
        return initList
    }

    const [currentList, setCurrentList] = useState(getCurrentList())

    const calcClassName = function (key: number): string {
        // console.log('key === currentKey', key, currentKey)
        var cl = ""
        if (key === 0) {
            cl = "finger-icon-up"
        } else if (key === 1) {
            cl = "finger-icon-down"
        }
        if (disabled) {
            if (key === reverse(currentKey)) {
                return `finger-icon-area ${cl}`
            } else {
                return `finger-icon-area ${cl}`
            }
        } else {
            if (key === reverse(currentKey) && currentList[key]["value"]) {
                return `finger-icon-area selected ${cl}`
            } else {
                return `finger-icon-area ${cl}`
            }
        }
    }
    const clickEvent = (e: any, key: number) => {
        e.preventDefault()
        setCurrentKey(reverse(key))
        var real = currentList
        real[key]["value"] = !real[key]["value"]
        real[reverse(key)] && (real[reverse(key)]["value"] = false)
        setCurrentList(real)
        /* let cloneCurrentList = [...currentList]
        if(){

        } */

        onClick && onClick(e, real[key]["value"], key)
    }
    const characterItem = (key: number) => {
        return (
            <span
                key={key}
                onClick={(e) => {
                    disabled ? null : clickEvent(e, key)
                }}
                className={`${calcClassName(key)}`}
            >
                {currentList![key]["el"]}
            </span>
        )
    }
    for (let index = 0; index < currentList!.length; index += 1) {
        if (disabled) {
            index === reverse(defaultValue) &&
                characters.push(characterItem(index))
        } else {
            characters.push(characterItem(index))
        }
    }
    return <div className={`product-finger-lv ${className}`}>{characters}</div>
}
FingerRate.defaultProps = {
    disabled: false,
    character: [
        <i className="ob-icon icon-thumb-up-review">+</i>,
        <i className="ob-icon icon-thumb-down-review">-</i>,
    ],
    className: "fingerRate",
}
export default FingerRate
