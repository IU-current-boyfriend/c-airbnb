import { memo } from 'react';
import PropType from 'prop-types';
import { RoomPhotoWarpper } from './style';

const RoomPhoto = memo((props) => {
  const { picture_url } = props.roomInfo;
  return (
    <RoomPhotoWarpper>
      {picture_url && <img src={picture_url} alt="" />}
    </RoomPhotoWarpper>
  );
});

RoomPhoto.propType = {
  roomInfo: PropType.object
}

export default RoomPhoto; 