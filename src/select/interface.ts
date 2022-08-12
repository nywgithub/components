interface BaseOptionProps {
    value?: string
    label?: string
    disabled?: boolean
}

interface BaseOptgroupProps {
    label?: string
    disabled?: boolean
    options?: Array<BaseOptionProps>
}

interface NativeSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {
    groupList: Array<BaseOptgroupProps>
}

interface NativeInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

interface SelectProps {
    prefixCls?: string
    style?: any
    className?: string
    trigger?: "click" | "hover"
    defaultSelected?: string | number
    multiple?: boolean
}

interface OptionProps {
    prefixCls?: string
    value?: string | number
    selectedValue?: string | number
    multiple?: boolean
    onSelect?: (val: any) => void
}
interface DropDownProps {
    prefixCls: string
    trigger?: "click" | "hover"
    dropDownListArray?: any
    defaultSelected?: string | number
    multiple?: boolean
}

interface PickerProps {
    prefixCls: string
    type?: "default" | "search"
    dropDownListArray?: any
    defaultSelected?: string | number
    multiple?: boolean
}

export {
    NativeSelectProps,
    NativeInputProps,
    BaseOptionProps,
    BaseOptgroupProps,
    DropDownProps,
    SelectProps,
    OptionProps,
    PickerProps,
}
