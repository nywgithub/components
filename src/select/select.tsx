import React from 'react';
import { ConfigContext } from '../common-provider/context';
import { SelectProps } from './interface';
import NativeSelect from './native/nativeSelect';
import OptGroup from './OptGroup';
import Option from './Option';
import Picker from './Picker';

const ForwardSelect: React.ForwardRefRenderFunction<unknown, SelectProps> = (
  { prefixCls: customizePrefixCls, ...props },
  ref,
) => {
  const { style, className, children, multiple, defaultSelected, value, onChange } = props;
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('select', customizePrefixCls);

  const nativeGroups = [
    {
      label: 'animal',
      disabled: false,
      options: [
        {
          label: 'dog',
          value: 'dog',
          disabled: false,
        },
        {
          label: 'cat',
          value: 'cat',
          disabled: false,
        },
      ],
    },
    {
      label: 'city',
      disabled: false,
      options: [
        {
          label: 'beijing',
          value: 'beijing',
          disabled: false,
        },
        {
          label: 'shanghai',
          value: 'shanghai',
          disabled: true,
        },
      ],
    },
  ];

  React.useImperativeHandle(ref, () => ({
    current,
  }));

  const [current, setCurrent] = React.useState<SelectProps['value'] | undefined>(
    defaultSelected || value,
  );

  /* 只允许非string的结构作为children渲染 */
  const PickerNodeList =
    children && typeof children !== 'string' && (children as React.ReactNode[]).length > 0
      ? (React.Children.toArray(children) as React.ReactElement[])
      : null;

  console.log('PickerNodeList', PickerNodeList);

  const pickerChange = (val: any) => {
    setCurrent(val);
    onChange?.(val);
  };

  const isOtionSelected = (val: any) => {
    console.log('current', current);
    if (Array.isArray(current)) {
      console.log('val', val);
      return current.indexOf(val) !== -1;
    } else {
      return val === current;
    }
  };

  return (
    <div className={`${prefixCls} ${className || ''}`} style={style}>
      <Picker
        onChange={pickerChange}
        value={current}
        defaultSelected={defaultSelected}
        prefixCls={prefixCls}
        multiple={multiple}
      >
        {PickerNodeList && PickerNodeList?.length > 0
          ? PickerNodeList.map((node: any, i) => {
              console.log('node', node);

              if (typeof node === 'string') return <React.Fragment key={i}>{node}</React.Fragment>;

              let nodeType = node.type.name;

              return nodeType === 'OptGroup' ? (
                <OptGroup key={node.key} prefixCls={prefixCls} {...node.props}>
                  {node.props.children &&
                    node.props.children.map((option: any, index: number) => {
                      if (typeof option === 'string')
                        return <React.Fragment>{option}</React.Fragment>;
                      return (
                        <Option
                          {...option.props}
                          selected={isOtionSelected(option.props.value)}
                          key={option.props.value || index}
                          prefixCls={prefixCls}
                          multiple={multiple}
                        ></Option>
                      );
                    })}
                </OptGroup>
              ) : (
                <Option
                  {...node.props}
                  selected={isOtionSelected(node.props.value)}
                  key={node.key}
                  prefixCls={prefixCls}
                  multiple={multiple}
                ></Option>
              );
            })
          : null}
      </Picker>

      {/* 根据children生成原生select */}
      <NativeSelect groupList={nativeGroups} />
    </div>
  );
};

const Select = React.forwardRef<unknown, SelectProps>(ForwardSelect);

Select.defaultProps = {};
// Select.Option = Option;
// Select.OptGroup = OptGroup;

export default Select;
