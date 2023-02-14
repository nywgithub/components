import cls from 'classnames';
import * as React from 'react';
import { CloseIcon } from '../icon';

interface BasicInputProps {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  allowClear?: boolean;
  prefixCls: string;
  element: React.ReactElement;
  type: string;
  handleClear: any;
}

const BasicInput: React.FC<BasicInputProps> = (props) => {
  const {
    allowClear,
    prefixCls,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    element,
    type,
    handleClear,
  } = props;

  const renderClearIcon = (prefixCls: string) => {
    if (!allowClear) {
      return null;
    }
    const className = `${prefixCls}-clear-icon`;
    // TODO:换成icon图标
    return (
      <span className={className} onClick={handleClear}>
        <CloseIcon />
      </span>
    );
  };
  //区分textarea 和 普通input框
  const renderTetxArea = (prefixCls: string, element: React.ReactElement) => {
    return (
      <span className={`${prefixCls}-wrapper`}>
        {React.cloneElement(element)}
        {/* 清除按钮 */}
        {renderClearIcon('textarea')}
      </span>
    );
  };

  const renderLabelNode = (
    prefixCls: string,
    nodetype: 'suffix' | 'prefix' | 'addonBefore' | 'addonAfter',
  ) => {
    const obj = {
      suffix,
      prefix,
      addonBefore,
      addonAfter,
    };
    return obj[nodetype] ? (
      <span
        className={`${prefixCls}-${nodetype} ${
          nodetype.indexOf('addon') !== -1
            ? `${prefixCls}-addon`
            : nodetype.indexOf('fix') !== -1
            ? `${prefixCls}-fix`
            : ''
        }`}
      >
        {obj[nodetype]}
      </span>
    ) : allowClear ? (
      <span className={`${prefixCls}-suffix ${prefixCls}-fix`}>
        {/* 清除按钮 */}
        {type !== 'textarea' ? renderClearIcon(prefixCls) : null}
      </span>
    ) : null;
  };

  const renderInput = (prefixCls: string, element: React.ReactElement) => {
    return (
      <span className={`${prefixCls}-wrapper`}>
        {renderLabelNode(prefixCls, 'addonBefore')}
        <span
          className={cls(prefixCls + '-group', {
            [`${prefixCls}-has-prefix`]: prefix,
            [`${prefixCls}-has-suffix`]: suffix,
          })}
        >
          {renderLabelNode(prefixCls, 'prefix')}
          {React.cloneElement(element, { className: prefixCls })}
          {renderLabelNode(prefixCls, 'suffix')}
        </span>
        {renderLabelNode(prefixCls, 'addonAfter')}
      </span>
    );
  };

  return type === 'textarea' ? renderTetxArea(prefixCls, element) : renderInput(prefixCls, element);
};

export default BasicInput;
