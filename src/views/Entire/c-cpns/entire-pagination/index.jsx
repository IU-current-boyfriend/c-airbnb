import { memo } from 'react';
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { EntirePagationWarpper } from './style';
import { fetchEntireDataAction } from '@/store/modules/entires/actionCreators';


const EntirePagination = memo(props => {
  const { currentPage, totalCount } = useSelector((state) => ({
    currentPage: state.entires.currentPage,
    totalCount: state.entires.totalCount
  }), shallowEqual)

  const count = Math.ceil(totalCount / 20);
  const start = currentPage * 20 + 1;
  const end = (currentPage + 1) * 20;

  const dispatch = useDispatch();
  const pageChangeHandle = (e, pageNew) => {
    // 平滑滑动的效果不是很好
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth'
    // });
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(pageNew - 1));
  };

  return (
    <EntirePagationWarpper>
      <Pagination
        count={count}
        onChange={(e, pageNew) => pageChangeHandle(e, pageNew)}
      />
      <div className='info'>
        第 {start} - {end}个房源, 共超过{totalCount}个
      </div>
    </EntirePagationWarpper>
  )
});

export default EntirePagination;