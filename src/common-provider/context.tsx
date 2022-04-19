//全局化配置

import * as React from 'react'
export interface ConfigConsumerProps {
  //class名前缀统一处理
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
  //多语配置
  locale?: string
}
export interface ConfigProviderProps extends Omit<ConfigConsumerProps, 'getPrefixCls'> {
  children?: React.ReactNode;
}

const defaultGetPrefixCls = (
  suffixCls?: string,
  customizePrefixCls?: string,
) => {
  if (customizePrefixCls) return customizePrefixCls

  return suffixCls ? `wei-${suffixCls}` : 'wei'
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
})

export const ConfigConsumer = ConfigContext.Consumer

const ConfigProvider : React.FC<ConfigProviderProps> = (props) => {
  const { children } = props
  return (
    <ConfigConsumer>
      {(context) => (
        <>
        <ConfigContext.Provider
          value={
            {
              ...context,
              ...props
            }
          }
        >
          {children}
        </ConfigContext.Provider>
        </>
      )}
    </ConfigConsumer>
  )
}
export default ConfigProvider
