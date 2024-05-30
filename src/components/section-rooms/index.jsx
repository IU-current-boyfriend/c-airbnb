import { memo } from 'react';
import PropType from 'prop-types';
import { SectionRoomsWarpper } from './style';
import RoomItem from '@/components/room-item';

const SectionRooms = memo((props) => {
  const { roomList } = props;
  return (
    <SectionRoomsWarpper>
      {
        roomList && roomList.map(room => (
          <RoomItem roomInfo={room} key={room.id} />
        ))
      }
    </SectionRoomsWarpper>
  );
});

SectionRooms.propType = {
  roomList: PropType.array
}

export default SectionRooms;