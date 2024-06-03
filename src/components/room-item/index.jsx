import { memo } from 'react';
import PropType from 'prop-types';
import { isEmptyObject } from '@/utils';
import { RoomItemWarpper, RoomRatingReviewWarpper } from './style';
import RoomVerifyInfo from '@/components/room-verify-info';
import RoomDescInfo from '@/components/room-desc-info';
import RoomRating from '@/components/room-rating';
import RoomReview from '@/components/room-review';
import RoomPhotoInfo from '@/components/room-photo';

const RoomItem = memo((props) => {
  const { roomInfo, itemWidth } = props;
  return (
    <RoomItemWarpper itemWidth={itemWidth ?? '33.33%'}>
      {isEmptyObject(roomInfo) && <RoomPhotoInfo roomInfo={roomInfo} />}
      {isEmptyObject(roomInfo.verify_info) && <RoomVerifyInfo verifyInfo={roomInfo.verify_info} />}
      {isEmptyObject(roomInfo) && <RoomDescInfo descInfo={roomInfo} />}
      <RoomRatingReviewWarpper>
        {isEmptyObject(roomInfo) && <RoomRating roomInfo={roomInfo} />}
        {isEmptyObject(roomInfo) && <RoomReview roomInfo={roomInfo} />}
      </RoomRatingReviewWarpper>
    </RoomItemWarpper>
  );
});

RoomItem.propType = {
  roomInfo: PropType.object,
  itemWidth: PropType.string
}

export default RoomItem; 