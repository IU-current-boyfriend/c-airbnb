import { memo } from 'react';
import PropType from 'prop-types';
import { isEmptyObject } from '@/utils';
import { RoomItemWarpper } from './style';
import RoomVerifyInfo from '@/components/room-verify-info';
import RoomDescInfo from '@/components/room-desc-info';
import RoomRating from '@/components/room-rating';

const RoomItem = memo((props) => {
  const { roomInfo } = props;
  return (
    <RoomItemWarpper>
      {isEmptyObject(roomInfo.verify_info) && <RoomVerifyInfo verifyInfo={roomInfo.verify_info} />}
      {isEmptyObject(roomInfo) && <RoomDescInfo descInfo={roomInfo} />}
      {isEmptyObject(roomInfo) && <RoomRating roomInfo={roomInfo} />}
    </RoomItemWarpper>
  );
});

RoomItem.propType = {
  roomInfo: PropType.object,
  itemWidth: PropType.string
}

export default RoomItem; 