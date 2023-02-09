import React, { createRef, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import Dialog from './dialog';
import { DialogProps } from './interface';

export type ControlledDialogRef = {
  closeDialog: () => void;
};

export const closeFnSet = new Set<() => void>();

const ControlledDialog: React.FC<DialogProps & { Cref: any }> = ({ Cref, ...props }) => {
  const { children, visible, ...otherProps } = props;
  const [realVisible, setRealVisible] = useState<boolean>(visible === true);

  const handleClose = () => {
    setRealVisible(false);
  };

  useImperativeHandle(Cref, () => ({
    closeDialog: handleClose,
  }));

  return (
    <Dialog visible={realVisible} onClose={handleClose} {...otherProps}>
      {children}
    </Dialog>
  );
};

//open实例需要返回关闭的方法(给外部组件调用)，调用open时默认开启弹窗visible
const open: (openParams: any) => {
  close(): void;
} = (openParams) => {
  const { content, ...props } = openParams;
  const container = document.createElement('div');

  //此处不能使用hook（useRef），raect不可以在非组件的方法内使用hook
  const ref = createRef<ControlledDialogRef>();

  const target = (
    <ControlledDialog visible {...props} Cref={ref}>
      {content}
    </ControlledDialog>
  );

  ReactDOM.render(target, container);

  const close = () => {
    ref.current?.closeDialog();
  };

  closeFnSet.add(close);

  return {
    close() {
      ref.current?.closeDialog();
    },
  };
};

const getAlert = (config: any, type: any) => {
  const content = (
    <div className="dialog-alert">
      <i className={`${type}-icon`}>{type}</i>
    </div>
  );
  open({
    ...config,
    footer: false,
    title: false,
    content,
    className: `alert alert-${type}`,
  });
};

const alert = {
  info: (config: any) => getAlert(config, 'info'),
  success: (config: any) => getAlert(config, 'success'),
  error: (config: any) => getAlert(config, 'error'),
  warning: (config: any) => getAlert(config, 'warning'),
};

export { open, alert };
