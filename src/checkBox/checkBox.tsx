import cls from 'classnames';
import React from 'react';
import { ConfigContext } from '../common-provider/context';
import CheckGroup from './checkGroup';
import { CheckBoxProps } from './interface';

const CheckBox = ({ prefixCls: customizePrefixCls, ...props }: CheckBoxProps) => {
  const { style, className, onChange, checked, disabled, value, children } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('checkBox', customizePrefixCls);

  const handleNativeCheckboxChange = (evt: any) => {
    console.log(evt);
    const e = Object.create(evt);
    e.props = {
      value,
      checked: e.target?.checked,
    };
    onChange?.(e);
  };

  const nativeCheckbox = (
    <input
      className={`${prefixCls}-input`}
      type="checkbox"
      onChange={handleNativeCheckboxChange}
      checked={checked}
      disabled={disabled}
    />
  );

  return (
    // input的事件会冒泡到label上
    <label
      className={cls(`${prefixCls}-wrapper`, {
        [`${prefixCls}-checked`]: checked,
        [`${prefixCls}-disabled`]: disabled,
      })}
      style={style}
    >
      <span className={cls(prefixCls, className)}>
        {nativeCheckbox}
        <span className={`${prefixCls}-inner`} />
      </span>
      <span className={`${prefixCls}-label`}>{children}</span>
    </label>
  );
};

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
};

// CheckBox.Group = CheckGroup;

export default CheckBox;
