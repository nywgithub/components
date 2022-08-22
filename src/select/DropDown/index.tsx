import classNames from "classnames"
import React from "react"
import { DropDownProps } from "../interface"
import Portals from "./Portals"

const ForwardDropDown: React.ForwardRefRenderFunction<unknown, DropDownProps> = (props, ref) => {
    const {
        prefixCls,
        children,
        trigger,
        multiple,
        onChange,
        current,
        className,
    } = props

    const handleSelect = (val) => {
        console.log("choosen", val)
        onChange?.(val)
    }

    const isValidChildren = children && typeof children !== "string"

    let dropDownNode = isValidChildren
        ? React.Children.toArray(children)
        : children

    return (
        <Portals container={document.body}>
            <div className={`${prefixCls}-dropDown ${className}`} id="source">
                {isValidChildren
                    ? (dropDownNode as React.ReactElement[]).map(
                          (option, i) => {
                              return (
                                  <React.Fragment key={i}>
                                      {React.cloneElement(option, {
                                          onChange: handleSelect,
                                      })}
                                  </React.Fragment>
                              )
                          }
                      )
                    : dropDownNode}
            </div>
        </Portals>
    )
}

const DropDown = React.forwardRef<unknown, DropDownProps>(
    ForwardDropDown
)

export default DropDown