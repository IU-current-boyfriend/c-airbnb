import { memo } from 'react';
import PropType from 'prop-types';

const RoomItem = memo((props) => {
  const { roomInfo } = props;
  return (
    <div>{roomInfo.id}</div>
  );
});

RoomItem.propType = {
  roomInfo: PropType.object,
  itemWidth: PropType.string
}

export default RoomItem; 