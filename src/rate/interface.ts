export interface RateProps {
  prefixCls?: string;
  style?: React.CSSProperties;
  className?: string;
  character?: React.ReactNode;
  count?: number;
  value?: number;
  defaultValue?: number;
  allowHalf?: boolean;
  allowClear?: boolean;
  disabled?: boolean;
  onChange?: (value: number) => void;
  onHoverChange?: (value: number) => void;
  children?: React.ReactNode;
}
