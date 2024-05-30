import { memo, useEffect } from 'react';
import classNames from 'classnames';
import { DialogWarpper } from './style';

const HeaderRightDialog = memo((props) => {
  const { children, visible, closeProfileDialog } = props;
  // 点击窗口任意地方，将隐藏dialog
  useEffect(() => {
    const handleCloseDialog = () => {
      closeProfileDialog(false);
    };
    window.addEventListener('click', handleCloseDialog);
    return () => {
      window.addEventListener('click', handleCloseDialog);
    }
  })
  return (
    <DialogWarpper className={
      classNames({ 'visible': visible })
    }>{children}</DialogWarpper>
  );
});

export default HeaderRightDialog;