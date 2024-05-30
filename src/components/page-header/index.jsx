import { memo, useState, useCallback } from 'react';
import HeaderLeft from '@/components/page-header/c-cpns/header-left';
import HeaderCenter from '@/components/page-header/c-cpns/header-center';
import HeaderRight from '@/components/page-header/c-cpns/header-right';
import HeaderRightDialog from './c-cpns/header-right-dialog';
import { HeaderWrapper } from './style';

const PageHeader = memo(() => {
  const [visible, setVisible] = useState(false);

  /**
   * 切换弹窗展示的方法
   */
  const toggleProfile = useCallback((e) => {
    e.stopPropagation();
    setVisible(!visible);
  }, [visible]);

  /**
   * 关闭弹窗的方法
   */
  const closeProfileDialog = useCallback(close => setVisible(close), []);

  return (
    <HeaderWrapper>
      <div className='page-header-container'>
        <HeaderLeft />
        <HeaderCenter />
        <HeaderRight toggleProfile={toggleProfile} />
        {/* profieDialog弹窗 */}
        <HeaderRightDialog
          visible={visible}
          closeProfileDialog={closeProfileDialog}
        >
          <div className='dialog-btns'>
            <div className='btn register'>注册</div>
            <div className='btn'>登陆</div>
          </div>
          <div className='help-center'>
            <div className='btn'>帮助中心</div>
          </div>
        </HeaderRightDialog>
      </div>
    </HeaderWrapper>
  );
})

export default PageHeader;