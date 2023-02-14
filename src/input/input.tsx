import omit from 'rc-util/lib/omit';
import React, { useState } from 'react';
import { ConfigContext } from '../common-provider/context';
import BasicInput from './BasicInput';
//联合类型：把两个存在并集的类型，拆开为联合类型
type LiteralUnion<T extends U, U> = T | (U & {});
//继承原生input的属性
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'type' | 'onChange'> {
  prefixCls?: string;
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
  >;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  allowClear?: boolean;
  bordered?: boolean;
  htmlSize?: number;
  onChange?: (e: any, val: any) => void;
}

const ForwardInput: React.ForwardRefRenderFunction<unknown, InputProps> = (
  { prefixCls: customizePrefixCls, ...props },
  ref,
) => {
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
    'onChange',
  ]);
  //input输入框的值
  const [value, setValue] = useState<any>(props?.defaultValue || props?.value);
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('input', customizePrefixCls);
  //按下键盘按键事件
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(e)
    //keyCode已弃用
    if (props.onPressEnter && e.key === 'Enter') {
      props.onPressEnter(e);
    }
    //此处为原生的事件
    props.onKeyDown?.(e);
  };
  //输入监听
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e, e.target.value);
  };
  //清除输入值
  const handleClear = () => {
    setValue('');
  };
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
          // ref={ref}
        />
      }
    />
  );
};
const Input = React.forwardRef<unknown, InputProps>(ForwardInput);
export default Input;
