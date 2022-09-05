<PopOver
    container="body"
    target={renderTarget}
    trigger='click'
    position='tl'
    closeByEsc
    onClose={handelClose}
>
    <div className="main">
        这里是弹出层内容
    </div>
</PopOver>


API:
container: 弹出层所在父元素,原有子元素会被覆盖
trigger: 弹出层触发方式
position: 弹出层所在位置
onShow: 弹层显示的回显
onClose: 弹层关闭的回显
closeByEsc: 弹窗esc关闭
visible: 弹层显示的受控属性(必须配合onVisibleChange使用)
onVisibleChange: 同上
className
style

<Portal
    container="body"
>
    <div className="main">
        这里是弹出层内容
    </div>
</Portal>


<Trigger
    className="demo"
    style={{width: 10}}
    trigger='click'
    triggerEvent={handelClick}
>
    <button>点击</button>
</Trigger>
