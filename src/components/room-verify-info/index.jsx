import { memo } from 'react';
import PropType from 'prop-types';
import { combineMessages } from '@/utils';
import { RoomVerifyInfoWarpper } from './style';

const RoomVerifyInfo = memo((props) => {
  const { verifyInfo } = props;
  const { messages } = verifyInfo;
  return (
    <RoomVerifyInfoWarpper >
      <div className="title">{combineMessages(messages)}</div>
    </RoomVerifyInfoWarpper>
  );
});

RoomVerifyInfo.propType = {
  verifyInfo: PropType.array
}

export default RoomVerifyInfo;