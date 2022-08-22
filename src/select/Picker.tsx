import React from "react"
import classNames from "classnames"
import domAlign from "dom-align"
import { PickerProps } from "./interface"
import DropDown from "./DropDown"

const Picker: React.FC<PickerProps> = (props) => {
    const {
        prefixCls,
        multiple,
        defaultSelected,
        children,
        value,
        onChange,
        className,
        style,
    } = props
    const [selectedValue, setSelectedValue] = React.useState(
        defaultSelected || value
    )

    const [searchValue, setSearchValue] = React.useState<any>(defaultSelected)

    const [show, setShow] = React.useState<boolean>(false)

    const dropDownRef = React.useRef()

    const inputRef = React.useRef()

    const align = () => {
        domAlign(document.getElementById("source"), inputRef?.current, {
            points: ["tl", "tl"],
            offset: [0, 0],
        })
    }

    const inputFocus = (e) => {
        console.log(e)
        console.log("dropDownRef?.current", dropDownRef?.current)
        align()
        setShow(true)
    }

    const inputBlur = (e) => {
        console.log(e)
        setShow(false)
    }

    const handleChange = (val) => {
        let currentValue = val
        if (multiple) {
            if (Array.isArray(selectedValue)) {
                currentValue = [...selectedValue]
                currentValue.push(val)
                setSelectedValue(currentValue)
            }
        } else {
            setSelectedValue(val)
        }

        onChange?.(currentValue)
    }

    const searchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const deleteValue = (val) => {
        console.log("deleteValue", val)
        if (Array.isArray(selectedValue)) {
            let currentValue = [...selectedValue]
            currentValue.indexOf(val) !== -1 &&
                currentValue.splice(currentValue.indexOf(val), 1)
            setSelectedValue(currentValue)
            onChange?.(currentValue)
        }
    }

    const clear = () => {
        let currentValue: any = ""
        if (Array.isArray(selectedValue)) {
            setSelectedValue([])
            currentValue = []
        } else {
            setSelectedValue("")
        }
        onChange?.(currentValue)
    }

    return (
        <>
            <div className={`${prefixCls}-picker ${className}`} style={style}>
                <div className={`${prefixCls}-selector-container`}>
                    <span className={`${prefixCls}-selector-search`}>
                        <input
                            type={"search"}
                            onFocus={inputFocus}
                            onBlur={inputBlur}
                            value={searchValue}
                            onChange={searchChange}
                            ref={(el) => ((inputRef as any).current = el)}
                        />
                    </span>
                    <span className="delete-icon" onClick={clear}>
                        {" "}
                        clear{" "}
                    </span>
                    {selectedValue &&
                        (!Array.isArray(selectedValue) ? (
                            <span className={`${prefixCls}-selector-item`}>
                                {selectedValue}
                            </span>
                        ) : (
                            selectedValue.length > 0 &&
                            selectedValue.map((item, i) => {
                                return (
                                    <span
                                        className={`${prefixCls}-selector-item`}
                                        key={i}
                                    >
                                        {item}
                                        {multiple && (
                                            <i
                                                className={"delete-icon"}
                                                onClick={() => {
                                                    deleteValue(item)
                                                }}
                                            >
                                                x
                                            </i>
                                        )}
                                    </span>
                                )
                            })
                        ))}
                </div>
                <div className={`${prefixCls}-picker-icon`}> - </div>
            </div>
            <DropDown
                current={selectedValue}
                prefixCls={prefixCls}
                children={children}
                onChange={handleChange}
                ref = {el => (dropDownRef as any).current = el}
                className={show ? 'show' : 'hidden'}
            />
        </>
    )
}

export default Picker
