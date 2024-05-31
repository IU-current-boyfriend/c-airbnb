import { memo } from 'react';
import PropType from 'prop-types';
import { combineRoomPrice } from '@/utils';
import { RoomDescInfoWarpper } from './style';

const RoomDescInfo = memo((props) => {
  const { name, price } = props.descInfo;
  return (
    <RoomDescInfoWarpper>
      <div className='room-desc-info'>
        <div className="desc-title">{name}</div>
        <div className='price'>{combineRoomPrice(price)}</div>
      </div>
    </RoomDescInfoWarpper>
  );
});

RoomDescInfoWarpper.propType = {
  descInfo: PropType.object
}

export default RoomDescInfo;