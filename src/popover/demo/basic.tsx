import React, { useEffect, useState } from "react"
import PopOver from ".."
import "../style"

export default () => {
    const handelClose = () => {
        console.log("close")
    }

    const triggerEvent = {
        onClick() {
            console.log("click")
        },
    }

    const [visible, setVisible] = useState(false)

    const onVisibleChange = (val: boolean) => {
        console.log("visible", val)
    }

    return (
        <>
            <PopOver
                target={<button>点击</button>}
                triggerEvent={triggerEvent}
                trigger="click"
                onClose={handelClose}
                visible={visible}
                onVisibleChange={onVisibleChange}
            >
                <div className="main">这里是弹出层内容</div>
            </PopOver>
        </>
    )
}
