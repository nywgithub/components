import React from 'react'
import './style'
import RcInputNumber, {
  InputNumberProps as RcInputNumberProps,
} from 'rc-input-number'
//公共context中规范样式名的方法
import { ConfigContext } from '../common-provider/context'
//继承rc-input-number的属性
export interface InputNumberProps extends RcInputNumberProps {
  prefixCls?: string
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

//转发原生input的ref,在使用组件的时候可以获取原生input的ref
const InputNumber = React.forwardRef<HTMLInputElement, InputNumberProps>(
  ({ prefixCls: customizePrefixCls, ...props }, ref) => {
    const { addonBefore, addonAfter } = props
    //获取context中的getPrefixCls
    const { getPrefixCls } = React.useContext(ConfigContext)
    // prefixCls为统一前缀(ui库名称-组件名称)
    const prefixCls = getPrefixCls('input-number', customizePrefixCls)
    const addonBeforeNode = addonBefore ? (
      <div className={`${prefixCls}-addbe`}>
        {addonBefore}
      </div>
    ) : null
    const addonAfterNode = addonAfter ? (
      <div className={`${prefixCls}-addaf`}>
        {addonAfter}
      </div>
    ) : null
    return (
      <div className={prefixCls}>
        {addonBeforeNode}
        <RcInputNumber ref={ref} {...props} />
        {addonAfterNode}
      </div>
    )
  },
)

export default InputNumber
