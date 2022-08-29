import React, { useEffect, useState, useRef } from "react"
import Select from ".."
import Picker from "../Picker"
import "../style"
const { Option, OptGroup } = Select
// const {Option} = Select

/* 
    TODO: 
    1. picker的children处理(可以传不受限制的ReactNode)， Select的children（限制OptGroup和Option）
    2. portals
    3. dom-align(1.获取dropDdown的ref 2.解决DOMAlign返回初始状态的问题 3.domAlign的触发时机)
    4. 多选
    5. search后数据筛选 (virtual list)
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
    const list = [1,2,3]
    const onChange = (val) => {
        console.log('selectRef', selectRef)
        setValue(val)
    }

    const pickerChange = (val) => {
        setPickerValue(val)
    }

    const selectRef = useRef(null)
    
    return (
        <>
            <Select defaultSelected={"three"} value={value} onChange={onChange} ref={selectRef}>
                {/* {
                    list.map((item) => (
                        <li
                            key={item}
                        >
                            {item}
                        </li>
                    ))
                } */}
                {/* <Option value="one">
                    <span>1</span>
                </Option>
                <Option value="two">2</Option>
                <Option value="three">3</Option>
                <Option value="four">4</Option> */}
                <OptGroup label="number">
                    <Option value="one">
                        <span>1</span>
                    </Option>
                    <Option value="two">2</Option>
                    <Option value="three">3</Option>
                    <Option value="four">4</Option>
                </OptGroup>
                <OptGroup>
                    <Option value="black">
                        <span>a</span>
                    </Option>
                    <span>1</span>
                    <Option value="blue">b</Option>
                    <Option value="red">c</Option>
                    <Option value="yellow">d</Option>
                </OptGroup>
                test string
            </Select>
            <div>current: {value}</div>
            <Picker value={pickerValue} onChange={pickerChange} prefixCls={'picker'}>
                <Selector></Selector>
            </Picker>
            <div>currentPicker: {pickerValue}</div>
            多选：
            <Select defaultSelected={["one", "three"]} value={["one", "three"]} multiple>
                {/* {
                    list.map((item) => (
                        <li
                            key={item}
                        >
                            {item}
                        </li>
                    ))
                } */}
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
                    <Option value="two">2</Option>
                    <Option value="three">3</Option>
                    <Option value="four">4</Option>
                </OptGroup>
                <OptGroup>
                    <Option value="black">
                        <span>a</span>
                    </Option>
                    <span>1</span>
                    <Option value="blue">b</Option>
                    <Option value="red">c</Option>
                    <Option value="yellow">d</Option>
                </OptGroup>
            </Select>
        </>
    )
}
