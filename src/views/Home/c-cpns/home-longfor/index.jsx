import { memo } from 'react';
import PropType from 'prop-types';
import { isEmptyArray } from '@/utils';
import { HomeLongForWarpper } from './style';
import SectionHeader from '@/components/section-header';
import RoomMaskItem from '@/components/room-mask-item';



const HomeLongFor = memo((props) => {
  const { dataInfo } = props;
  const { title, subtitle, list } = dataInfo;
  return (
    <HomeLongForWarpper>
      <SectionHeader title={title} subtitle={subtitle} />
      {!isEmptyArray(list) && <RoomMaskItem roomInfo={list} itemWidth="20%" />}
    </HomeLongForWarpper>
  );
});

HomeLongFor.propType = {
  dataInfo: PropType.object
}

export default HomeLongFor;