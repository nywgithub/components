import React from 'react';
import Button from '../button';
import { ConfigContext } from '../common-provider/context';
import Dialog from './dialog';
import { DialogProps } from './interface';

export interface confirmDialogProps extends DialogProps {
  cancelContent?: string | React.ReactNode;
  confirmContent?: string | React.ReactNode;
  cancel?: () => void;
  confirm?: () => void;
}

const ConfirmDialog: React.FC<confirmDialogProps> = ({
  prefixCls: customizePrefixCls,
  ...props
}) => {
  const { children, cancelContent, confirmContent, cancel, confirm, ...otherProps } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('dialog', customizePrefixCls);

  const handleCancel = () => {
    otherProps?.onClose?.();
    cancel?.();
  };

  const handleConfirm = () => {
    confirm?.();
  };

  return (
    <Dialog
      footer={
        <div className={`${prefixCls}-bottom`}>
          <Button style={{ marginRight: 10 }} onClick={handleCancel}>
            {cancelContent || 'cancel'}
          </Button>
          <Button type="success" onClick={handleConfirm}>
            {confirmContent || 'confirm'}
          </Button>
        </div>
      }
      {...otherProps}
    >
      {children}
    </Dialog>
  );
};

export default ConfirmDialog;
