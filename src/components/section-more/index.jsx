import { memo } from 'react';
import PropType from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { SectionMoreWarpper } from './style';

const SectionMore = memo(props => {
  const { name } = props;
  const navigate = useNavigate();
  const toDetailPage = () => navigate('/entire');
  return (
    <SectionMoreWarpper className={classNames({ 'all': !name })}>
      <span className='link' onClick={() => toDetailPage()}>
        {
          name ? <span className='desc'>{`查看更多${name}房源`}</span> :
            <span className='desc'>查看全部</span>
        }
      </span>
      <span className='icon'>
        <IconArrowRight />
      </span>
    </SectionMoreWarpper>
  );
});

SectionMore.propType = {
  name: PropType.string
}

export default SectionMore;