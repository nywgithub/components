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
    style?: React.CSSProperties
    className?: string
    value?: string | number | Array<string | number>
    trigger?: "click" | "hover"
    defaultSelected?: string | number | Array<string | number>
    multiple?: boolean
    onChange?: (val: any) => void
}

interface OptionProps {
    prefixCls?: string
    value?: string | number
    selectedValue?: string | number
    multiple?: boolean
    selected?: boolean
    onChange?: (val: any) => void
    disabled?: boolean
    groupDisabled?: boolean
}

interface OptGroupProps {
    prefixCls?: string
    disabled?: boolean
    onChange?: (val: any) => void
}
interface DropDownProps {
    prefixCls?: string
    trigger?: "click" | "hover"
    multiple?: boolean
    onChange?: (val: any) => void
    current?: any
    className?: string
}

interface PickerProps {
    prefixCls?: string
    className?: string
    style?: React.CSSProperties
    type?: "default" | "search"
    value?: string | number | Array<string | number>
    defaultSelected?: string | number | Array<string | number>
    multiple?: boolean
    onChange?: (val: any) => void
}

interface PortalsProps {
    container: Element
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
    OptGroupProps,
    PortalsProps,
}
