import { memo } from 'react';
import PropType from 'prop-types';
import { RoomReviewWarpper } from './style';


const RoomReview = memo((props) => {
  const { bottom_info, reviews_count } = props.roomInfo;
  return (
    <RoomReviewWarpper>
      <div className='count'>{reviews_count}</div>
      <div className='content'>{bottom_info?.content ? `·${bottom_info.content}` : ''}</div>
    </RoomReviewWarpper>
  );
});

RoomReview.propType = {
  roomInfo: PropType.object
}

export default RoomReview;