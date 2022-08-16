import React, { useEffect, useState } from "react"
import Select from ".."
import "../style"
const { Option } = Select
// const {Option} = Select
export default () => {
    const [value, setValue] = useState("one2")
    const onChange = (val) => {
        setValue(val)
    }
    return (
        <>
            <Select defaultSelected={"one2"} value={value} onChange={onChange}>
                <Option value="one">1</Option>
                <Option value="one2">2</Option>
                <Option value="one3">3</Option>
                <Option value="one4">4</Option>
            </Select>
            <div>
                current: {value}
            </div>
        </>
    )
}
