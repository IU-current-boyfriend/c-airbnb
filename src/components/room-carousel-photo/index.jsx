import { memo, useRef, useState } from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';
import { Carousel } from 'antd';
import { RoomCarouselPhotoWarpper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';



const RoomCarouselPhoto = memo((props) => {
  const pictureUrls = props.pictureUrls;
  const [dotIndex, setDotIndex] = useState(0);
  const carouselRef = useRef();

  const handleClickControl = (e, isRight = true) => {
    e.stopPropagation();
    computedDotIndex(e, isRight, (newIndex) => {
      setDotIndex(newIndex);
    });
  }

  const computedDotIndex = (e, isRight, callback) => {
    const lens = pictureUrls.length;
    !isRight ? carouselRef.current.prev() : carouselRef.current.next();
    let newIndex = isRight ? dotIndex + 1 : dotIndex - 1;
    if (newIndex < 0) newIndex = lens - 1;
    if (newIndex > lens - 1) newIndex = 0;
    callback(newIndex);
  }


  return (
    <RoomCarouselPhotoWarpper>
      <div className='slider'>
        {/* 左右按钮 */}
        <div className="control">
          <div className='btn left' onClick={(e) => handleClickControl(e, false)}>
            <IconArrowLeft width="24" height="24" />
          </div>
          <div className='btn right' onClick={(e) => handleClickControl(e)}>
            <IconArrowRight width="24" height="24" />
          </div>
        </div>
        {/* 控制器 */}
        <div className="indicator">
          {/* 指示器的波浪点形状未实现 */}
          <Indicator dotIndex={dotIndex}>
            {
              () => {
                return pictureUrls.map((item, index) => {
                  return (
                    <div className="item" key={item}>
                      <span
                        className={
                          classNames('dot',
                            {
                              'active': dotIndex === index,
                            }
                          )
                        }
                      ></span>

                    </div>
                  );
                })
              }
            }
          </Indicator>
        </div>
        {/* 轮播图 */}
        <Carousel dots={false} ref={carouselRef}>
          {
            pictureUrls.map((item, index) => {
              return (
                <div
                  key={index}
                  className='cover'>
                  <img src={item} alt="" />
                </div>
              );
            })
          }
        </Carousel>
      </div>
    </RoomCarouselPhotoWarpper>
  );
});

RoomCarouselPhoto.propType = {
  pictureUrls: PropType.array
}

export default RoomCarouselPhoto;