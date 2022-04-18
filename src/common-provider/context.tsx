//全局化配置

import * as React from 'react'
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string
  locale?: string
}
export interface ConfigProviderProps extends ConfigConsumerProps {
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

const ConfigProvider = (props: ConfigProviderProps) => {
  const { children } = props
  return (
    <ConfigConsumer>
      {(context) => (
        <ConfigContext.Provider
          value={context}
          {...props}
        >
          {children}
        </ConfigContext.Provider>
      )}
    </ConfigConsumer>
  )
}
export default ConfigProvider
