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
    value?: string | number
    className?: string
    trigger?: "click" | "hover"
    defaultSelected?: string | number
    multiple?: boolean
    onChange?: (val: any) => void
}

interface OptionProps {
    prefixCls?: string
    value?: string | number
    selectedValue?: string | number
    multiple?: boolean
    selected?: boolean
    onSelect?: (val: any) => void
}
interface DropDownProps {
    prefixCls: string
    trigger?: "click" | "hover"
    dropDownListArray?: any
    multiple?: boolean
    onSelect?: (val: any) => void
    current?: any
}

interface PickerProps {
    prefixCls: string
    type?: "default" | "search"
    value?: string | number
    defaultSelected?: string | number
    multiple?: boolean
    onChange?: (val: any) => void
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
