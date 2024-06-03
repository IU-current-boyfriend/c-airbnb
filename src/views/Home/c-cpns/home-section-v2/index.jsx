import { memo } from 'react';
import PropType from 'prop-types';
import { HomeSectionV2Warpper } from './style';
import { isEmptyArray } from '@/utils';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionMore from '@/components/section-more';

const HomeSectionV2 = memo((props) => {
  const { title, subtitle, list } = props.dataInfo;
  return (
    <HomeSectionV2Warpper>
      <SectionHeader title={title} subtitle={subtitle} />
      {!isEmptyArray(list) && <SectionRooms roomList={list.slice(0, 8)} itemWidth="25%" />}
      <SectionMore />
    </HomeSectionV2Warpper>
  );
});

HomeSectionV2.propType = {
  dataInfo: PropType.object
}

export default HomeSectionV2;

