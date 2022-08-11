import React from "react"
import { BaseOptionProps, NativeSelectProps } from "../interface"

/* multiple 则返回input 反之 返回原生select */

export const BaseOption: React.FC<BaseOptionProps> = (props) => {
    const { label, value, disabled } = props
    return (
        <option value={value} disabled={disabled} key={value}>
            {label}
        </option>
    )
}

const NativeSelect: React.FC<NativeSelectProps> = (props) => {
    const { groupList } = props

    return (
        <select name="pets" multiple size={4} style={{ display: "none" }}>
            {groupList.map((group) => {
                return (
                    <optgroup
                        label={group.label}
                        key={group.label}
                        disabled={group.disabled}
                    >
                        {group?.options?.map((option) => (
                            <BaseOption
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                                label={option.label}
                            />
                        ))}
                    </optgroup>
                )
            })}
        </select>
    )
}
export default NativeSelect
