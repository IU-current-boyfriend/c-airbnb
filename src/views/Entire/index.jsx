import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { EntrieWarpper } from './style';
import { fetchEntireDataAction } from '@/store/modules/entires/actionCreators';

import filterData from '@/assets/data/filter_data.json';
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-rooms';
import EntirePagination from './c-cpns/entire-pagination';
import SectionLoading from '@/components/section-loading';


const Entire = memo((props) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => ({
    isLoading: state.entires.isLoading
  }), shallowEqual);

  useEffect(() => {
    // 打开此页面,将回到页面顶端
    document.body.scrollIntoView({ block: 'start' });
    dispatch(fetchEntireDataAction());
  }, [dispatch])

  return (
    <EntrieWarpper>
      <EntireFilter searchData={filterData} />
      {isLoading ? <SectionLoading /> : <EntireRooms />}
      {isLoading ? <SectionLoading /> : <EntirePagination />}
    </EntrieWarpper>
  );
});

export default Entire;