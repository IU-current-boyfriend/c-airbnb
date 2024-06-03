import { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchHomeAllDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeSectionV3 from './c-cpns/home-section-v3';
import HomeLongFor from './c-cpns/home-longfor';
import { HomeWapper } from './style';

const Home = memo(() => {
  // 获取派发事件对象
  const dispatch = useDispatch();

  // 从redux中获取数据, shallowEqual针对redux中的state，对比新旧state是否
  // 是同个引用，如果是则保存原来的引用，如果不是，则返回新的引用。这个差别能够
  // 决定组件是否重新渲染。
  const { homeDiscountInfo, hotRecommendInfo, longForInfo, highScoreInfo, goodPriceInfo, plusInfo } = useSelector(state => ({
    homeDiscountInfo: state.home.homeDiscountInfo,
    hotRecommendInfo: state.home.hotRecommendInfo,
    longForInfo: state.home.longForInfo,
    highScoreInfo: state.home.highScoreInfo,
    goodPriceInfo: state.home.goodPriceInfo,
    plusInfo: state.home.plusInfo,
  }), shallowEqual);

  useEffect(() => {
    // 触发行为
    dispatch(fetchHomeAllDataAction());
  }, [dispatch]);

  return (
    <HomeWapper>
      <HomeBanner></HomeBanner>
      <div className='home-content'>
        {isEmptyObject(homeDiscountInfo) && <HomeSectionV1 dataInfo={homeDiscountInfo} />}
        {isEmptyObject(hotRecommendInfo) && <HomeSectionV1 dataInfo={hotRecommendInfo} />}
        {isEmptyObject(longForInfo) && <HomeLongFor dataInfo={longForInfo} />}
        {isEmptyObject(highScoreInfo) && <HomeSectionV2 dataInfo={highScoreInfo} />}
        {isEmptyObject(goodPriceInfo) && <HomeSectionV2 dataInfo={goodPriceInfo} />}
        {isEmptyObject(plusInfo) && <HomeSectionV3 dataInfo={plusInfo} />}
      </div>
    </HomeWapper>
  );
})

export default Home;