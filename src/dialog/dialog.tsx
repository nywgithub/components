import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ConfigContext } from '../common-provider/context';
import Portal from '../popover/portal';
import { useCloseByEsc } from '../util/closeByEsc';
// import ConfirmDialog from './confirmDialog';
import { DialogProps } from './interface';

//TODO:visible改成受控的

const Dialog: React.FC<DialogProps> = ({ prefixCls: customizePrefixCls, ...props }) => {
  const {
    style,
    className,
    children,
    visible,
    mask,
    delay,
    title,
    footer,
    closeIcon,
    closeOnClickMask,
    NoScroll,
    closeByEsc,
    onClose,
    onClosed,
    onOpen,
    onOpened,
  } = props;

  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('dialog', customizePrefixCls);

  const handleVisible = (show: boolean) => {
    show ? onOpen?.() : onClose?.();
  };

  const closeDialog = () => handleVisible(false);

  const openDialog = () => handleVisible(true);

  const dialogRef = React.useRef(null);

  useEffect(() => {
    if (visible) {
      openDialog();
      NoScroll && disableBodyScroll(dialogRef as unknown as HTMLElement | Element);
    } else {
      NoScroll && enableBodyScroll(dialogRef as unknown as HTMLElement | Element);
    }
  }, [visible]);

  const dialogNode = (
    <div className={`${prefixCls}-wrap`} style={style} ref={dialogRef}>
      <div className={`${prefixCls}-close`} onClick={closeDialog}>
        {closeIcon}
      </div>
      {title && (
        <div className={`${prefixCls}-head`}>
          <div className={`${prefixCls}-title`}>{title}</div>
        </div>
      )}
      <div className={`${prefixCls}-body`}>{children}</div>
      {footer && <div className={`${prefixCls}-foot`}>{footer}</div>}
    </div>
  );

  useCloseByEsc(() => {
    closeByEsc && onClose?.();
  });

  const handleMaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.target, e.currentTarget);
    mask && e.target === e.currentTarget && closeOnClickMask && onClose?.();
  };

  return (
    <Portal visible={visible} className={`${prefixCls} ${className || ''}`}>
      {mask && <div className={`${prefixCls}-mask`}></div>}
      <div className={`${prefixCls}-root`} onClick={handleMaskClick}>
        <CSSTransition
          appear
          mountOnEnter
          unmountOnExit
          in={visible}
          timeout={delay}
          classNames={'fade'}
          onEntered={onOpened}
          onExited={onClosed}
          addEndListener={() => {}}
        >
          {dialogNode}
        </CSSTransition>
      </div>
    </Portal>
  );
};

Dialog.defaultProps = {
  visible: false,
  mask: true,
  title: '',
  closeIcon: <i>x</i>,
  closeOnClickMask: false,
  delay: 300,
  closeByEsc: false,
  NoScroll: false,
};

// Dialog.ConfirmDialog = ConfirmDialog;

export default Dialog;
