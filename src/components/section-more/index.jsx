import { memo } from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { SectionMoreWarpper } from './style';

const SectionMore = memo(props => {
  const { name } = props;
  return (
    <SectionMoreWarpper className={classNames({ 'all': !name })}>
      {
        name ? <span className='desc'>{`查看更多${name}房源`}</span> :
          <span className='desc'>查看全部</span>
      }
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