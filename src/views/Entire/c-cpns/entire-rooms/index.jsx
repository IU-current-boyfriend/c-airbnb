import { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { EntireRoomsWarpper } from './style';
import { isEmptyArray } from '@/utils';
import SectionRooms from '@/components/section-rooms';

const EntireRooms = memo((props) => {
  const { roomList } = useSelector(state => ({
    roomList: state.entires.roomList,
  }), shallowEqual);
  return (
    <EntireRoomsWarpper>
      {!isEmptyArray(roomList) && <SectionRooms roomList={roomList} itemWidth="20%" />}
    </EntireRoomsWarpper>
  );
});

export default EntireRooms;