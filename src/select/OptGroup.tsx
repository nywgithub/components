import React from "react"
import classNames from "classnames"
import { OptGroupProps } from "./interface"

const OptGroup: React.FC<OptGroupProps> = (props) => {
    const { prefixCls, children, onChange, disabled } = props
    const handleChange = (val) => {
        onChange?.(val)
    }

    const isValidChildren = children && typeof children !== "string"

    let optionNode = isValidChildren
        ? React.Children.toArray(children)
        : children

    return (
        <div className={`${prefixCls}-optGroup`}>
            {isValidChildren
                ? (optionNode as React.ReactElement[]).map((option, i) => {
                      return (
                          <React.Fragment key={i}>
                              {React.cloneElement(option, {
                                  onChange: handleChange,
                                  groupDisabled: disabled,
                              })}
                          </React.Fragment>
                      )
                  })
                : optionNode}
        </div>
    )
}

OptGroup.defaultProps = {
    disabled: false,
}

export default OptGroup
