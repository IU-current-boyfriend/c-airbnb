import { memo } from 'react';
import IconGlobal from '@/assets/svg/icon-global';
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar';
import IconProfileMenu from '@/assets/svg/icon-profile-menu';
import { LoginWarpper } from './style';
const Login = memo((props) => {
  const { toggleProfile } = props;
  return (
    <LoginWarpper>
      <div className='profile-icon'>
        <div className='icon'>登录</div>
        <div className='icon'>注册</div>
        <div className='icon'>
          <IconGlobal />
        </div>
      </div>
      <div
        className='profile-detail'
        onClick={toggleProfile}
      >
        <IconProfileMenu />
        <IconProfileAvatar />
      </div>
    </LoginWarpper>
  );
})

export default Login;