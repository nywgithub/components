import classNames from 'classnames';
import React from 'react';
import { OptionProps } from './interface';

const Option: React.FC<OptionProps> = (props) => {
  const { prefixCls, value, multiple, onChange, children, selected, disabled, groupDisabled } =
    props;
  const handleClick = () => {
    onChange?.(value);
  };
  return (
    <div
      className={`${prefixCls}-option ${classNames({
        selected: selected,
      })}`}
      onClick={groupDisabled || disabled ? () => {} : handleClick}
    >
      {children}
    </div>
  );
};

Option.defaultProps = {
  disabled: false,
};

export default Option;
