import * as React from 'react'
import classNames from 'classnames'

interface BasicInputProps {
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  allowClear?: boolean
  prefixCls: string
  element: React.ReactElement
  type: string
  handleClear: any
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
  } = props
  const renderClearIcon = (prefixCls: string) => {
    if (!allowClear) {
      return null
    }
    const className = `${prefixCls}-clear-icon`
    // TODO:换成icon图标
    return (
      <span className={className} onClick={handleClear}>
        x
      </span>
    )
  }
  //区分textarea 和 普通input框
  const renderTetxArea = (prefixCls: string, element: React.ReactElement) => {
    return (
      <span className={`${prefixCls}-wrapper`}>
        {React.cloneElement(element)}
        {/* 清除按钮 */}
        {renderClearIcon('textarea')}
      </span>
    )
  }

  const renderLabelNode = (prefixCls: string, type: string) => {
    const obj = {
      suffix,
      prefix,
      addonBefore,
      addonAfter,
    }
    return obj[type] ? (
      <span className={`${prefixCls}-${type}`}>{obj[type]}</span>
    ) : null
  }

  const renderInput = (prefixCls: string, element: React.ReactElement) => {
    return (
      <span className={`${prefixCls}-wrapper`}>
        {renderLabelNode(prefixCls, 'addonBefore')}
        {renderLabelNode(prefixCls, 'prefix')}
        {React.cloneElement(element)}
        {/* 清除按钮 */}
        {renderClearIcon('input')}
        {renderLabelNode(prefixCls, 'suffix')}
        {renderLabelNode(prefixCls, 'addonAfter')}
      </span>
    )
  }

  return type === 'textarea'
    ? renderTetxArea(prefixCls, element)
    : renderInput(prefixCls, element)
}

export default BasicInput
