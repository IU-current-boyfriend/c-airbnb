import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { HomeSectionWarpper } from './style';
import { collectNames } from '@/utils';
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';
import SectionMore from '@/components/section-more';

const HomeSectionV1 = memo((props) => {
  const { dataInfo } = props;
  const { subtitle, title, dest_address = [], dest_list = {} } = dataInfo;
  const tabNames = collectNames(dest_address, 'name');
  const initialName = Object.keys(dest_list)[0] ?? '';
  const [name, setName] = useState(initialName);
  const navCityHandleClick = useCallback((index, name) => {
    setName(name);
  }, []);
  return (
    <HomeSectionWarpper>
      <SectionHeader subtitle={subtitle} title={title} />
      <SectionTabs tabNames={tabNames} tabClick={navCityHandleClick} />
      <SectionRooms roomList={dest_list[name]} />
      <SectionMore name={name} />
    </HomeSectionWarpper>
  );
});

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeSectionV1;