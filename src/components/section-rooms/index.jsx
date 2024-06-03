import { memo } from 'react';
import PropType from 'prop-types';
import { SectionRoomsWarpper } from './style';
import RoomItem from '@/components/room-item';

const SectionRooms = memo((props) => {
  const { roomList, itemWidth } = props;
  return (
    <SectionRoomsWarpper>
      {
        roomList && roomList.map(room => (
          <RoomItem roomInfo={room} key={room.id} itemWidth={itemWidth} />
        ))
      }
    </SectionRoomsWarpper>
  );
});

SectionRooms.propType = {
  roomList: PropType.array,
  itemWidth: PropType.string
}

export default SectionRooms;