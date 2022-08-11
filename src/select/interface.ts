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
}

interface OptionProps {
    prefixCls?: string
    value?: string
}
interface DropDownProps {
    prefixCls: string
    trigger?: "click" | "hover"
    SelectionListArray?: any
}

export {
    NativeSelectProps,
    NativeInputProps,
    BaseOptionProps,
    BaseOptgroupProps,
    DropDownProps,
    SelectProps,
    OptionProps,
}
