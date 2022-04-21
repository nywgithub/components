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
}

const BasicInput: React.FC<BasicInputProps> = (props) => {
  const { allowClear, prefixCls, prefix, suffix, element, type } = props
  const renderClearIcon = (prefixCls: string) => {
    if (!allowClear) {
      return
    }
    const className = `${prefixCls}-clear-icon`
    // TODO:换成icon图标
    return <span className={className}>x</span>
  }
  //区分textarea 和 普通input框
  const renderTetxArea = (prefixCls:string, element: React.ReactElement) => {
    return(
      <span className={`${prefixCls}-wrapper`}>
        {React.cloneElement(element)}
        {/* 清除按钮 */}
        {renderClearIcon('textarea')}
      </span>
    )
  }


  const renderInput = (prefixCls:string, element: React.ReactElement) => {
      const prefixNode = prefix ? (
        <span className={`${prefixCls}-prefix`}>{prefix}</span>
      ) : null
      const suffixNode = suffix ? (
        <span className={`${prefixCls}-prefix`}>{suffix}</span>
      ) : null
    return(
      <span className={`${prefixCls}-wrapper`}>
        {prefixNode}
        {React.cloneElement(element)}
        {suffixNode}
        {/* 清除按钮 */}
        {renderClearIcon('textarea')}
      </span>
    )
  }
  
  
  return (
      type === 'textarea' ? renderTetxArea(prefixCls, element) : renderInput(prefixCls, element)
  )
}

export default BasicInput
