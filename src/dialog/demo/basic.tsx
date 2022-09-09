import React, { useEffect, useState } from "react"
import Dialog from ".."
import { open, clear } from ".."
import "../style"
import "./basic.less"

export default () => {
    const [visible, setVisible] = useState(false)
    const openDialg = () => {
        setVisible(true)
    }

    const onOpen = () => {
        console.log("打开")
    }

    const onClose = () => {
        setVisible(false)
        console.log("关闭")
    }

    //TODO:实例模式下react的状态改变不会取通知实例

    const openDialgInstance = () => {
        let dialoger = open({
            content: "实例弹窗的内容",
            onOpen,
            title: "实例弹窗标题",
            closeByEsc: true,
            closeOnClickMask: true,
            NoScroll: true,
            footer: (
                <div className="demo-bottom">
                    <button
                        style={{ marginRight: 10 }}
                        onClick={() => {
                            dialoger?.close()
                        }}
                    >
                        cancel
                    </button>
                    <button
                        onClick={() => {
                            dialoger?.close()
                        }}
                    >
                        confirm
                    </button>
                </div>
            ),
        })
    }

    return (
        <>
            <div id="test"></div>
            <button onClick={openDialg}>打开弹窗</button>
            <button onClick={openDialgInstance}>打开实例弹窗</button>
            <Dialog
                visible={visible}
                onOpen={onOpen}
                onClose={onClose}
                title="标题"
                closeByEsc
                closeOnClickMask
                NoScroll
                footer={
                    <div className="demo-bottom">
                        <button style={{ marginRight: 10 }} onClick={onClose}>
                            cancel
                        </button>
                        <button onClick={onClose}>confirm</button>
                    </div>
                }
            >
                弹窗内容
            </Dialog>
        </>
    )
}
