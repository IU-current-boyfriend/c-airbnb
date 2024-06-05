import { memo, useRef, useEffect } from 'react';
import PropType from 'prop-types';
import { IndicatorWarpper } from './style';

const Indicator = memo((props) => {
  const { dotIndex } = props;
  const dotRef = useRef();

  useEffect(() => {
    /**
     * 需要实现两个功能：
     *  第一个功能，小点点在前几个不滚动、后几个不滚动
     *  第二个功能，小点点都是在中间位置
     */
    const selectItemEl = dotRef.current.children[dotIndex];
    const selectItemWidth = selectItemEl.clientWidth;
    const selectItemOffset = selectItemEl.offsetLeft;

    const scrollElWidth = dotRef.current.clientWidth
    const scrollElScroll = dotRef.current.scrollWidth

    // 核心逻辑
    let distance = (selectItemWidth * 0.5 + selectItemOffset) - (scrollElWidth * 0.5);
    if (distance < 0) distance = 0;
    if (distance > scrollElScroll - scrollElWidth) distance = scrollElScroll - scrollElWidth;
    dotRef.current.style.transform = `translate(-${distance}px)`;


  }, [dotIndex])
  return (
    <IndicatorWarpper>
      <div className='scroll' ref={dotRef}>
        {props.children()}
      </div>
    </IndicatorWarpper>
  );
});

Indicator.propType = {
  dotIndex: PropType.number
};

export default Indicator;