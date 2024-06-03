import { memo, useRef, useState, useEffect } from 'react';
import { ScollViewWarpper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';

const ScrollView = memo(props => {
  // 记录当前的索引值
  const [posIndex, setPosIndex] = useState(0);
  // 设置左右箭头显示状态
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  // 如何判断是否显示和隐藏左右按钮
  const scrollRef = useRef();
  // totalDistance是固定的值,所以可以使用useRef设置固定不变的值
  const totalDistanceRef = useRef(0);

  /**
   * 主要清楚：clientWidth和scorllWidth的区别
   *  clientWidth是不包括边框的元素宽度，offsetWidth包括边框的元素宽度
   *  scrollWidth是包含元素溢出不可见的宽度，不包括边框宽度
   * 
   */

  useEffect(() => {
    // clientWidth是可视的宽度
    const clientWidth = scrollRef.current.clientWidth;
    // scrollWidth包括溢出隐藏的宽度
    const scrollWidth = scrollRef.current.scrollWidth;
    // 可以滚动的最大距离
    const totalDistance = scrollWidth - clientWidth;
    // 记录最大可滚动的距离
    totalDistanceRef.current = totalDistance;

  }, [props.children]);


  const hanleClickControl = (right = true) => {
    if (!right) return scrollPosition(posIndex - 1);
    scrollPosition(posIndex + 1);
  }

  const scrollPosition = (index) => {
    const offsetLeft = scrollRef.current.children[index].offsetLeft;
    scrollRef.current.style.transform = `translate(-${offsetLeft}px)`;
    // 相对于父元素的左侧距离已经超过可移动的最大距离,右边按钮消失
    offsetLeft >= totalDistanceRef.current ? setShowRightBtn(false) : setShowRightBtn(true);
    // 相对于父元素的左侧距离为0时,左侧按钮消失
    offsetLeft <= 0 ? setShowLeftBtn(false) : setShowLeftBtn(true);
    // 剔除临界条件之后，再设置索引值，更新视图
    setPosIndex(index);
  }

  return (
    <ScollViewWarpper>
      {
        showLeftBtn && <div className='control left' onClick={() => hanleClickControl(false)}>
          <IconArrowLeft />
        </div>
      }
      {
        showRightBtn && <div className='control right' onClick={() => hanleClickControl()}>
          <IconArrowRight />
        </div>
      }
      <div className='content'>
        <div className='scroll' ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScollViewWarpper>
  );
});


export default ScrollView;