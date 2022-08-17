import React from "react"
import classNames from "classnames"
import { SelectProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import NativeSelect from "./native/nativeSelect"
import Option from "./Option"
import Picker from "./Picker"
import OptGroup from "./OptGroup"

const ForwardSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const {
        style,
        className,
        children,
        multiple,
        defaultSelected,
        value,
        onChange,
    } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("select", customizePrefixCls)

    const nativeGroups = [
        {
            label: "animal",
            disabled: false,
            options: [
                {
                    label: "dog",
                    value: "dog",
                    disabled: false,
                },
                {
                    label: "cat",
                    value: "cat",
                    disabled: false,
                },
            ],
        },
        {
            label: "city",
            disabled: false,
            options: [
                {
                    label: "beijing",
                    value: "beijing",
                    disabled: false,
                },
                {
                    label: "shanghai",
                    value: "shanghai",
                    disabled: true,
                },
            ],
        },
    ]

    React.useImperativeHandle(ref, () => ({}))

    const [current, setCurrent] = React.useState<string | number | undefined>(
        defaultSelected || value
    )

    const PickerNodeList =
        children && React.isValidElement(children[0])
            ? (React.Children.toArray(children) as React.ReactElement[])
            : null
    console.log("PickerNodeList", PickerNodeList)
    const pickerChange = (val) => {
        setCurrent(val)
        onChange?.(val)
    }

    return (
        <div className={`${prefixCls} ${className || ""}`} style={style}>
            <Picker
                onChange={pickerChange}
                value={current}
                defaultSelected={defaultSelected}
                prefixCls={prefixCls}
                multiple={multiple}
            >
                {PickerNodeList && PickerNodeList?.length > 0
                    ? PickerNodeList.map((node) => {
                          console.log("node", node)
                          let nodeType = node.type.name
                          return nodeType === "OptGroup" ? (
                              <OptGroup
                                  key={node.key}
                                  prefixCls={prefixCls}
                                  {...node.props}
                              >
                                  {node.props.children &&
                                      node.props.children.map((option) => (
                                          <Option
                                              {...option.props}
                                              selected={
                                                  option.props.value === current
                                              }
                                              key={option.props.value}
                                              prefixCls={prefixCls}
                                              multiple={multiple}
                                          ></Option>
                                      ))}
                              </OptGroup>
                          ) : (
                              <Option
                                  {...node.props}
                                  selected={node.props.value === current}
                                  key={node.key}
                                  prefixCls={prefixCls}
                                  multiple={multiple}
                              ></Option>
                          )
                      })
                    : null}
            </Picker>

            {/* 根据children生成原生select */}
            <NativeSelect groupList={nativeGroups} />
        </div>
    )
}

const Select = React.forwardRef<unknown, SelectProps>(ForwardSelect)

Select.defaultProps = {}
//@ts-ignore
Select.Option = Option
Select.OptGroup = OptGroup

export default Select
