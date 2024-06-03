import { memo } from 'react';
import Rating from '@mui/material/Rating';
import PropType from 'prop-types';
import { RoomRatingWarpper } from './style';

const RoomRating = memo(props => {
  const { roomInfo } = props;
  const { star_rating, star_rating_color } = roomInfo;
  return (
    <RoomRatingWarpper>
      <Rating
        value={star_rating ?? 5}
        precision={0.1}
        size='small'
        readOnly
        sx={{ fontSize: '12px', color: star_rating_color ?? '#00848A', marginRight: "-2px" }}
      />
    </RoomRatingWarpper>
  );
});

RoomRating.propType = {
  roomInfo: PropType.object
}

export default RoomRating;