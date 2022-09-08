import React, { useState, useEffect } from "react"
import classNames from "classnames"
import { DialogProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import { CSSTransition } from "react-transition-group"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import { useCloseByEsc } from "../util/closeByEsc"
import Portal from "@/popover/portal"

const ForwardDialog: React.ForwardRefRenderFunction<unknown, DialogProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const {
        style,
        className,
        children,
        visible,
        mask,
        delay,
        title,
        footer,
        closeIcon,
        closeOnClickMask,
        NoScroll,
        closeByEsc,
        onClose,
        onClosed,
        onOpen,
        onOpened,
    } = props

    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("dialog", customizePrefixCls)

    const handleVisible = (show) => {
        show ? onOpen?.() : onClose?.()
    }

    const closeDialog = () => handleVisible(false)

    const openDialog = () => handleVisible(true)

    const dialogRef = React.useRef(null)

    useEffect(() => {
        if (visible) {
            openDialog()
            NoScroll && disableBodyScroll(dialogRef)
        } else {
            NoScroll && enableBodyScroll(dialogRef)
        }
    }, [visible])

    React.useImperativeHandle(ref, () => ({}))

    const dialogNode = (
        <div className={`${prefixCls}-wrap`} style={style} ref={dialogRef}>
            <div className={`${prefixCls}-close`} onClick={closeDialog}>
                {closeIcon}
            </div>
            <div className={`${prefixCls}-head`}>
                <div className={`${prefixCls}-title`}>{title}</div>
            </div>
            <div className={`${prefixCls}-body`}>{children}</div>
            <div className={`${prefixCls}-foot`}>{footer}</div>
        </div>
    )

    useCloseByEsc(() => {
        closeByEsc && onClose?.()
    })

    const handleMaskClick = (e) => {
        console.log(e.target, e.currentTarget)
        mask && e.target === e.currentTarget && closeOnClickMask && onClose?.()
    }

    return (
        <Portal visible={visible} className={`${prefixCls} ${className || ""}`}>
            {mask && <div className={`${prefixCls}-mask`}></div>}
            <div className={`${prefixCls}-root`} onClick={handleMaskClick}>
                <CSSTransition
                    appear
                    mountOnEnter
                    unmountOnExit
                    in={visible}
                    timeout={delay}
                    classNames={"fade"}
                    onEntered={onOpened}
                    onExited={onClosed}
                >
                    {dialogNode}
                </CSSTransition>
            </div>
        </Portal>
    )
}

const Dialog = React.forwardRef<unknown, DialogProps>(ForwardDialog)

Dialog.defaultProps = {
    visible: false,
    mask: true,
    title: "",
    closeIcon: <i>x</i>,
    closeOnClickMask: false,
    delay: 300,
    closeByEsc: false,
    NoScroll: false,
}

export default Dialog
