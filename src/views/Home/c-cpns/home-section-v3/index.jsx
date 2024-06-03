import { memo } from 'react';
import PropType from 'prop-types';
import { isEmptyArray } from '@/utils';
import SectionHeader from '@/components/section-header';
import RoomItem from '@/components/room-item';
import SectionMore from '@/components/section-more';
import { HomeSectionV3Warpper } from './style';
import ScrollView from '@/base-ui/scorll-view';


const HomeSectionV3 = memo(props => {
  const { title, subtitle, list } = props.dataInfo;

  return (
    <HomeSectionV3Warpper>
      <SectionHeader title={title} subtitle={subtitle} />
      <ScrollView>
        {!isEmptyArray(list) && list.map(room => (<RoomItem key={room.id} roomInfo={room} itemWidth="20%" />))}
      </ScrollView>
      <SectionMore />
    </HomeSectionV3Warpper>
  );
});

HomeSectionV3.propType = {
  dataInfo: PropType.object
}

export default HomeSectionV3;