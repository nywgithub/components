import React, {useState} from 'react'
import omit from 'rc-util/lib/omit'
import BasicInput  from './BasicInput'
import { ConfigContext } from '../common-provider/context'
import type InputNumber from './inputNumber'
//联合类型：把两个存在并集的类型，拆开为联合类型
type LiteralUnion<T extends U, U> = T | (U & {})
//继承原生input的属性
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'type'> {
  prefixCls?: string
  // ref: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#%3Cinput%3E_types
  type?: LiteralUnion<
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week',
    string
  >
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  allowClear?: boolean
  bordered?: boolean
  htmlSize?: number
}

const Input: React.FC<InputProps> = ({
  prefixCls: customizePrefixCls,
  ...props
}) => {
  const {
    onPressEnter,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    allowClear,
    bordered,
    htmlSize,
  } = props
  const otherProps = omit(props as InputProps, [
    'prefixCls',
    'onPressEnter',
    'addonBefore',
    'addonAfter',
    'prefix',
    'suffix',
    'allowClear',
    // Input elements must be either controlled or uncontrolled,
    // specify either the value prop, or the defaultValue prop, but not both.
    'defaultValue',
    'size',
    'bordered',
    'htmlSize',
  ])
  //input输入框的值
  const [value, setValue] = useState<any>(props?.defaultValue || props?.value)
  let input!: HTMLInputElement
  const { getPrefixCls } = React.useContext(ConfigContext)
  const prefixCls = getPrefixCls('input', customizePrefixCls)
  //按下键盘按键事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(e)
    //keyCode已弃用
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    //此处为原生的事件
    props.onKeyDown?.(e)
  }
  //输入监听
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    props.onChange?.(e)
  }
  //清除输入值
  const handleClear = () => {
    setValue('')
  }
  return (
    <BasicInput
      prefixCls={prefixCls}
      type={'input'}
      {...props}
      handleClear={handleClear}
      element={
        <input
          {...otherProps}
          //按下键盘按键事件
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={value}
        />
      }
    />
  )
} 
export default Input
