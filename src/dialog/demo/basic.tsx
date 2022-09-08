import React, { useEffect, useState } from "react"
import Dialog from ".."
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

    return (
        <>
            <button onClick={openDialg}>打开弹窗</button>
            <Dialog
                visible={visible}
                onOpen={onOpen}
                onClose={onClose}
                title="标题"
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
