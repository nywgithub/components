import cls from 'classnames';
import React from 'react';
import { ConfigContext } from '../common-provider/context';
import { LoadingIcon } from '../icon';
import { ButtonProps } from './interface';
const sizes = {
  small: 'small',
  default: 'default',
  large: 'large',
};

const types = {
  primary: 'primary',
  default: 'default',
  warning: 'warning',
  success: 'success',
  error: 'error',
  info: 'info',
  disabled: 'disabled',
};

const Button: React.FC<ButtonProps> = ({ prefixCls: customizePrefixCls, ...props }) => {
  const {
    loading,
    disabled,
    block,
    children,
    type,
    className,
    htmlType,
    onClick,
    hollow,
    size,
    href,
    dashed,
    circle,
    plain,
    style,
    ...attr
  } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('button', customizePrefixCls);

  const isDisabled = disabled || loading ? { disabled: true } : { onClick };

  const baseProps = {
    ...attr,
    ...isDisabled,
    type: htmlType,
    className: cls(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-default`]: !disabled && type === types.default,
      [`${prefixCls}-normal`]: type === types.default,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-hollow`]: hollow,
      [`${prefixCls}-size-${size}`]: size !== sizes.default,
      [`${prefixCls}-dashed`]: dashed,
      [`${prefixCls}-circle`]: circle,
      [`${prefixCls}-plain`]: plain,
    }),
  };
  const content = (
    <>
      {loading && !circle && <LoadingIcon className="cherry-loading" />}
      <span>{children}</span>
    </>
  );
  if (href) {
    return (
      //ts-ignore
      <a
        href={disabled ? 'javascript:void(0);' : href}
        className={cls(`${prefixCls}-link`, className, {
          [`${prefixCls}-link-disabled`]: disabled,
        })}
        {...attr}
      >
        {content}
      </a>
    );
  }
  return (
    //@ts-ignore
    <button style={style} {...baseProps}>
      {content}
    </button>
  );
};

Button.defaultProps = {
  prefixCls: 'cherry-button',
  href: '',
  type: types.default,
  htmlType: 'button',
  size: sizes.default,
  loading: false,
  block: false,
  disabled: false,
  hollow: false,
  dashed: false,
  circle: false,
  plain: false,
};

export default Button;
