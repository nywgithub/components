import React, { useEffect, useState } from "react"
import Select from ".."
import Picker from "../Picker"
import "../style"
const { Option, OptGroup } = Select
// const {Option} = Select

/* 
    TODO: 
    1. picker的children处理(可以传不受限制的ReactNode)， Select的children（限制OptGroup和Option）
    2. portals
    3. dom-align
    4. 多选
    5. search后数据筛选
    6. 公共类型抽取
    7. icon
    8. clear
    9. group
    10. 字符串处理
*/

const Selector = (props) => {
    const { onChange } = props
    const list = [1, 2, 3]
    const handleClick = (E, val) => {
        onChange?.(val)
    }
    return (
        <ul>
            {list.map((item) => (
                <li
                    key={item}
                    onClick={(e) => {
                        handleClick(e, item)
                    }}
                >
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default () => {
    const [value, setValue] = useState("three")
    const [pickerValue, setPickerValue] = useState("one")
    const onChange = (val) => {
        setValue(val)
    }

    const pickerChange = (val) => {
        setPickerValue(val)
    }
    return (
        <>
            <Select defaultSelected={"three"} value={value} onChange={onChange}>
                {/* <Option value="one">
                    <span>1</span>
                </Option>
                <Option value="two">2</Option>
                <Option value="three">3</Option>
                <Option value="four">4</Option> */}
                <OptGroup>
                    <Option value="one">
                        <span>1</span>
                    </Option>
                    <Option value="two" disabled>
                        2
                    </Option>
                    <Option value="three">3</Option>
                    <Option value="four">4</Option>
                </OptGroup>
                <OptGroup disabled>
                    <Option value="black">
                        <span>a</span>
                    </Option>
                    <Option value="blue">b</Option>
                    <Option value="red">c</Option>
                    <Option value="yellow">d</Option>
                </OptGroup>
            </Select>
            <div>current: {value}</div>

            <Picker value={pickerValue} onChange={pickerChange}>
                <Selector></Selector>
            </Picker>
            <div>currentPicker: {pickerValue}</div>
        </>
    )
}
