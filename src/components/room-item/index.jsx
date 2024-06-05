import { memo } from 'react';
import PropType from 'prop-types';
import { isEmptyObject } from '@/utils';
import { RoomItemWarpper, RoomRatingReviewWarpper } from './style';
import RoomVerifyInfo from '@/components/room-verify-info';
import RoomDescInfo from '@/components/room-desc-info';
import RoomRating from '@/components/room-rating';
import RoomReview from '@/components/room-review';
import RoomPhotoInfo from '@/components/room-photo';
import RoomCarouselPhoto from '@/components/room-carousel-photo';

const RoomItem = memo((props) => {
  const { roomInfo, itemWidth } = props;
  const { picture_urls } = roomInfo;
  return (
    <RoomItemWarpper itemWidth={itemWidth ?? '33.33%'}>
      {/* 这个地方有意思，可以只展示图片，可以展示轮播图 */}
      {
        picture_urls
          ? (isEmptyObject(roomInfo) && <RoomCarouselPhoto pictureUrls={picture_urls} />)
          : (isEmptyObject(roomInfo) && <RoomPhotoInfo roomInfo={roomInfo} />)
      }
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