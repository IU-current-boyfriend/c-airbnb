import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeAllDataAction } from '@/store/modules/home';
import { HomeWapper } from './style';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import { isEmptyObject } from '@/utils';

const Home = memo(() => {
  // 获取派发事件对象
  const dispatch = useDispatch();

  // 从redux中获取数据, shallowEqual针对redux中的state，对比新旧state是否
  // 是同个引用，如果是则保存原来的引用，如果不是，则返回新的引用。这个差别能够
  // 决定组件是否重新渲染。
  const { homeDiscountInfo } = useSelector(state => ({
    homeDiscountInfo: state.home.homeDiscountInfo
  }), shallowEqual);


  useEffect(() => {
    // 触发行为
    dispatch(fetchHomeAllDataAction());
  }, [dispatch]);

  return (
    <HomeWapper>
      <HomeBanner></HomeBanner>
      <div className='home-content'>
        {
          isEmptyObject(homeDiscountInfo) && <HomeSectionV1 dataInfo={homeDiscountInfo}></HomeSectionV1>
        }
      </div>
    </HomeWapper>
  );
})

export default Home;