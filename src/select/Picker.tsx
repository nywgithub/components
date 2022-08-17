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

    const inputFocus = (e) => {
        console.log(e)
    }

    const inputBlur = (e) => {
        console.log(e)
    }

     const handleChange = (val) => {
         setSelectedValue(val)
         onChange?.(val)
     }


    const searchChange = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <div className={`${prefixCls}-picker`}>
                <div className={`${prefixCls}-selector-container`}>
                    <span className={`${prefixCls}-selector-search`}>
                        <input
                            type={"search"}
                            onFocus={inputFocus}
                            onBlur={inputBlur}
                            value={searchValue}
                            onChange={searchChange}
                        />
                    </span>
                    <span className={`${prefixCls}-selector-item`}>
                        {selectedValue}
                    </span>
                </div>
                <div className={`${prefixCls}-picker-icon`}> - </div>
            </div>
            <DropDown
                current={selectedValue}
                prefixCls={prefixCls}
                children={children}
                onChange={handleChange}
            />
        </>
    )
}

export default Picker
