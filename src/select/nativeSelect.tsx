import React from "react"
import classNames from "classnames"
import { SelectProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
const ForwardSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const { style, className } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("select", customizePrefixCls)

    const [currentValue, setCurrentValue] = React.useState<any>("")

    React.useImperativeHandle(ref, () => ({}))

    const selectChange = (e) => {
        setCurrentValue(e.target.value)
    }

    return (
        <div
            className={`${prefixCls} ${className || ""}`}
            style={style}
            ref={(e) => {
                console.log(e)
            }}
        >
            <label>
                <select
                    name="select"
                    value={currentValue}
                    onChange={selectChange}
                >
                    <option value="value1">Value 1</option>
                    <option value="value2">Value 2</option>
                    <option value="value3">Value 3</option>
                </select>
            </label>
            <label>
                Please choose one or more pets:
                <select name="pets" multiple size={4}>
                    <optgroup label="4-legged pets">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster" disabled>
                            Hamster
                        </option>
                    </optgroup>
                    <optgroup label="Flying pets">
                        <option value="parrot">Parrot</option>
                        <option value="macaw">Macaw</option>
                        <option value="albatross">Albatross</option>
                    </optgroup>
                </select>
            </label>
        </div>
    )
}

const Select = React.forwardRef<unknown, SelectProps>(ForwardSelect)

Select.defaultProps = {}

export default Select
