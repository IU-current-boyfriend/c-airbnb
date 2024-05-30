import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import IconLogo from '@/assets/svg/icon_logo';
import { LogoWarpper } from './style';
const Logo = memo(() => {
  const navigate = useNavigate();
  // 跳转回到主页
  const toBackHome = () => {
    navigate('/home');
  }
  return (
    <LogoWarpper onClick={() => toBackHome()}>
      <IconLogo />
    </LogoWarpper>
  );
})

export default Logo;