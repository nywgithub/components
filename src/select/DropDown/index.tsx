import React from "react"
import { DropDownProps } from "../interface"
// import Option from "../Option"
const DropDown: React.FC<DropDownProps> = (props) => {
    const { prefixCls, children, trigger, multiple, onChange, current } = props

    const handleSelect = (val) => {
        console.log("choosen", val)
        onChange?.(val)
    }

    const isValidChildren =
        children && typeof children !== "string"

    let dropDownNode = isValidChildren
        ? React.Children.toArray(children)
        : children

    return (
        <div className={`${prefixCls}-dropDown`}>
            {isValidChildren ? (dropDownNode as React.ReactElement[]).map((option, i)=>{
              return (
                  <React.Fragment key={i}>
                      {React.cloneElement(option, { onChange: handleSelect })}
                  </React.Fragment>
              )
            }) : dropDownNode}
        </div>
    )
}

export default DropDown
