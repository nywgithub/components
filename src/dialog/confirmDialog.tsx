import React from "react"
import Dialog from "./dialog"
import { DialogProps } from "./interface"
import { ConfigContext } from "../common-provider/context"

export interface confirmDialogProps extends DialogProps {
    cancelContent?: string | React.ReactNode
    confirmContent?: string | React.ReactNode
    cancel?: () => void
    confirm?: () => void
}

const ConfirmDialog: React.FC<confirmDialogProps> = ({
    prefixCls: customizePrefixCls,
    ...props
}) => {
    const {
        children,
        cancelContent,
        confirmContent,
        cancel,
        confirm,
        ...otherProps
    } = props

    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("dialog", customizePrefixCls)

    const handleCancel = () => {
        otherProps?.onClose?.()
        cancel?.()
    }

    const handleConfirm = () => {
        confirm?.()
    }

    return (
        <Dialog
            footer={
                <div className={`${prefixCls}-bottom`}>
                    <button style={{ marginRight: 10 }} onClick={handleCancel}>
                        {cancelContent || "cancel"}
                    </button>
                    <button onClick={handleConfirm}>
                        {confirmContent || "confirm"}
                    </button>
                </div>
            }
            {...otherProps}
        >
            {children}
        </Dialog>
    )
}

export default ConfirmDialog
