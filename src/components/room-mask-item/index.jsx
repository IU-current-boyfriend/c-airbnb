import React, { memo } from 'react';
import PropType from 'prop-types';
import { RoomMaskItemWarpper, RoomMaskContentWarpper } from './style';
import ScrollView from '@/base-ui/scorll-view';

const RoomMaskItem = memo((props) => {
  const { roomInfo, itemWidth } = props;
  return (
    <ScrollView>
      {
        roomInfo.map(room => (
          <RoomMaskItemWarpper
            itemWidth={itemWidth ?? '20%'}
            key={room.picture_url}>
            <img src={room.picture_url} alt='' />
            <RoomMaskContentWarpper>
              <div className='city'>{room.city}</div>
              <div className='price'>
                <span className='average'>场均</span>
                <span>{room.price}</span>
              </div>
            </RoomMaskContentWarpper>
          </RoomMaskItemWarpper>
        ))
      }
    </ScrollView>
  );
});

RoomMaskItem.propType = {
  roomInfo: PropType.array
}

export default RoomMaskItem;