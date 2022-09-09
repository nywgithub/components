import React, { useRef, useState, useImperativeHandle, createRef } from "react"
import ReactDOM from "react-dom"
import Dialog from "./dialog"
import { DialogProps } from "./interface"

export type ControlledDialogRef = {
    closeDialog: () => void
}

export const closeFnSet = new Set<() => void>()

const ControlledDialog: React.FC<DialogProps & { Cref: any }> = ({
    Cref,
    ...props
}) => {
    const { children, visible, ...otherProps } = props
    const [realVisible, setRealVisible] = useState<boolean>(visible === true)

    const handleClose = () => {
        setRealVisible(false)
    }

    useImperativeHandle(Cref, () => ({
        closeDialog: handleClose,
    }))

    return (
        <Dialog visible={realVisible} onClose={handleClose} {...otherProps}>
            {children}
        </Dialog>
    )
}

//open实例需要返回关闭的方法(给外部组件调用)，调用open时默认开启弹窗visible
const open = ({ content, ...props }) => {
    const container = document.createElement("div")

    //此处不能使用hook（useRef），raect不可以在非组件的方法内使用hook
    const ref = createRef<ControlledDialogRef>()

    const target = (
        <ControlledDialog visible {...props} Cref={ref}>
            {content}
        </ControlledDialog>
    )

    ReactDOM.render(target, container)

    const close = () => {
        ref.current?.closeDialog()
    }

    closeFnSet.add(close)

    return {
        close() {
            ref.current?.closeDialog()
        },
    }
}

export { open }
