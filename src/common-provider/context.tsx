//全局化配置

import * as React from 'react';
export interface ConfigConsumerProps {
  //class名前缀统一处理
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  //多语配置
  locale?: string;
}
export interface ConfigProviderProps extends Omit<ConfigConsumerProps, 'getPrefixCls'> {
  children?: React.ReactNode;
}
//默认参数配置函数
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `cherry-${suffixCls}` : 'cherry';
};
//context默认有全局的样式配置函数
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
//1.外部调用传值给ConfigProvider->传给context->再传给组件
//3.组件处使用ConfigContext来使用数据
const ConfigProvider: React.FC<ConfigProviderProps> = (props) => {
  const { children } = props;
  return (
    <ConfigConsumer>
      {(context) => {
        console.log(context);
        return (
          // 2.使用provider将数据传给组件
          <ConfigContext.Provider
            value={{
              ...context,
              ...props,
            }}
          >
            {children}
          </ConfigContext.Provider>
        );
      }}
    </ConfigConsumer>
  );
};
export default ConfigProvider;
