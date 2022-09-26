// Form.tsx
import { useMemo, useRef } from "react"
import FieldContext from "./FieldContext"
import { FormStore } from "./FormStore"
import type { Store } from "./typings"

type BaseFormProps = Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit">

// 第一阶段的props需要实现的参数只有initialValues、children
export interface FormProps<Values = any> extends BaseFormProps {
    initialValues?: Store
    children?: React.ReactNode
}

const Form: React.FC<FormProps> = ({ initialValues, children }) => {
    // FormStore的实例就是上面说到的管理“数据状态”和“fieldEntities”的对象，
    // 我们用useRef使其在组件的整个生命周期内持续存在。
    const formStore = useRef<FormStore>(new FormStore())

    // 通过mountRef让下面的逻辑仅在组件首次加载时执行
    const mountRef = useRef(false)
    if (initialValues) {
        // setInitialValues用于存放initialValues，存放initialValues的目的在于reset时候把initialValues赋值给store，
        // 第二个参数为true时，调用setInitialValues更新formStore内部的initialValues同时也会更新store，
        // store就是上面所说的存放“数据状态”的对象变量
        formStore.current.setInitialValues(initialValues, !mountRef.current)
    }
    if (!mountRef.current) {
        mountRef.current = true
    }

    // 创建fieldContextValue用于注入到下面的FieldContext，
    // 使得Form中的子组件都能访问formStore
    const fieldContextValue = useMemo(
        () => ({
            formStore: formStore.current,
        }),
        []
    )

    const wrapperNode = (
        <FieldContext.Provider value={fieldContextValue}>
            {children}
        </FieldContext.Provider>
    )

    return <form>{wrapperNode}</form>
}

export default Form
