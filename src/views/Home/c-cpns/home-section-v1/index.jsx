import { memo, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { HomeSectionWarpper } from './style';
import { collectNames } from '@/utils';
import SectionHeader from '@/components/section-header';
import SectionTabs from '@/components/section-tabs';
import SectionRooms from '@/components/section-rooms';

const HomeSectionV1 = memo((props) => {
  const { dataInfo } = props;
  const { subtitle, title, dest_address = [], dest_list = {} } = dataInfo;
  // 获取nav导航栏的title标题
  const tabNames = collectNames(dest_address, 'name');

  // 获取初次name值
  const initialName = Object.keys(dest_list)[0] ?? '';

  // 出现一个useState hook的问题，也就是说useState的初始化值只有在组件创建的时候产生。
  /**
   * 第一次渲染的时候，dataInfo是undefined，然后初始化useState
   * 第二次渲染的时候，dataInfo虽然有值，但是初始化useState没用了，依旧是''空字符串
   * 
   */

  const [name, setName] = useState(initialName);

  console.log('name: =>', name);


  // 不推荐的方式，原因在于渲染3次
  // useEffect(() => {
  //   const name = (Object.keys(dest_list) ?? {})[0];
  //   if (!name) return;
  //   const roomList = dest_list[name];
  //   setRoomList(roomList);
  //   setName(name);
  // }, [dest_list]);



  const navCityHandleClick = useCallback((index, name) => {
    setName(name);
  }, []);


  return (
    <HomeSectionWarpper>
      <SectionHeader subtitle={subtitle} title={title} />
      <SectionTabs tabNames={tabNames} tabClick={navCityHandleClick} />
      <SectionRooms roomList={dest_list[name]} />
    </HomeSectionWarpper>
  );
});

HomeSectionV1.propTypes = {
  dataInfo: PropTypes.object
}

export default HomeSectionV1;