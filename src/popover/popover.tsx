import React, { useState, useEffect, useRef, useImperativeHandle } from "react"
import classNames from "classnames"
import { PopOverProps } from "./interface"
import { ConfigContext } from "../common-provider/context"
import Portal from "./portal"
import Trigger from "./trigger"
import domAlign from "dom-align"
import { useClickAway } from "ahooks"

const ForwardPopOver: React.ForwardRefRenderFunction<unknown, PopOverProps> = (
    { prefixCls: customizePrefixCls, ...props },
    ref
) => {
    const {
        style,
        className,
        closeByEsc,
        onClose,
        container,
        trigger,
        triggerEvent,
        target,
        alignConfig,
        visible,
        onVisibleChange,
        closeOnClickOutside,
    } = props
    const { getPrefixCls } = React.useContext(ConfigContext)
    const prefixCls = getPrefixCls("popover", customizePrefixCls)

    const [popVisible, setPopVisible] = useState<boolean>(visible === true)

    const handleVisible = (val) => {
        setPopVisible(val)
        onVisibleChange?.(val)
    }

    useEffect(() => {
        if (closeByEsc) {
            function onKeyUp(e: KeyboardEvent) {
                if (e.key === "Escape" || e.key === "Esc" || e.keyCode === 27) {
                    handleVisible(false)
                    onClose!(e)
                }
            }
            document.body.addEventListener("keyup", onKeyUp)
        }
    }, [])

    const portalRef = useRef(null)
    const triggerRef = useRef(null)

    useClickAway(() => {
        closeOnClickOutside && handleVisible(false)
    }, [triggerRef, portalRef])

    const align = () => {
        console.log("align", portalRef.current, triggerRef.current)
        portalRef.current &&
            triggerRef.current &&
            domAlign(portalRef.current, triggerRef.current, alignConfig)
    }

    useEffect(() => {
        popVisible && align()
    }, [popVisible])

    const cancelAlign = () => {
        handleVisible(false)
    }

    let popTriggerEvent = {}

    if (trigger === "click") {
        popTriggerEvent["onClick"] = function () {
            handleVisible(true)
            triggerEvent["onClick"]?.()
        }
    } else if (trigger === "hover") {
        popTriggerEvent["onMouseEnter"] = function () {
            handleVisible(true)
            triggerEvent["onMouseEnter"]?.()
        }

        popTriggerEvent["onMouseLeave"] = function () {
            cancelAlign()
            triggerEvent["onMouseLeave"]?.()
        }
    } else if (trigger === "focus") {
        popTriggerEvent["onFocus"] = function () {
            handleVisible(true)
            triggerEvent["onFocus"]?.()
        }
        popTriggerEvent["onBlur"] = function () {
            cancelAlign()
            triggerEvent["onBlur"]?.()
        }
    }

    useImperativeHandle(ref, () => ({
        close: () => {
            handleVisible(false)
        },
    }))

    return (
        <>
            <Trigger
                trigger={trigger}
                triggerEvent={popTriggerEvent}
                Tref={(ref) => {
                    console.log(ref)
                    triggerRef.current = ref?.element?.current
                }}
            >
                <div className={`${prefixCls}-target`}>{target}</div>
            </Trigger>
            <Portal
                container={container}
                className={`${prefixCls}-portal`}
                visible={popVisible}
                Pref={(ref) => {
                    console.log(ref)
                    portalRef.current = ref?.element
                }}
            >
                <div className={`${prefixCls}-content`}>{props.children}</div>
            </Portal>
        </>
    )
}

const PopOver = React.forwardRef<unknown, PopOverProps>(ForwardPopOver)

PopOver.defaultProps = {
    visible: false,
    alignConfig: {
        points: ["bl", "tl"],
        offset: [0, 0],
        targetOffset: [0, 0],
        overflow: { adjustX: true, adjustY: true },
    },
    closeByEsc: true,
    container: "body",
    trigger: "hover",
    closeOnClickOutside: true,
}

export default PopOver
