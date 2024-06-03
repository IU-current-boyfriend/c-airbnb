import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData, getHotRecommendData, getLongForInfoData, getHighScoreInfoData, getGoodPriceInfoData, getPlusInfoData } from "@/services/modules/home";

/**
 * 这样写会有问题：
 *  1. 不是并发请求的，某个错误，将导致后面的不再请求
 */
// const fetchHomeAllDataAction = createAsyncThunk('fetchHomeAllDataAction', async () => {
//   const res = await getHomeDiscountData();
//   console.log('res: =>', res); 
// });
export const fetchHomeAllDataAction = createAsyncThunk('fetchHomeAllDataAction', (payload, { dispatch, getState }) => {
  getHomeDiscountData().then(res => {
    dispatch(changeHomeDiscountInfoAction(res));
  });
  getHotRecommendData().then(res => {
    dispatch(changeRecommendInfoAction(res));
  });
  getLongForInfoData().then(res => {
    dispatch(changeLongForInfoAction(res));
  });
  getHighScoreInfoData().then(res => {
    dispatch(changeHighScoreInfoAction(res));
  });
  getGoodPriceInfoData().then(res => {
    dispatch(changeGoodPriceInfoAction(res));
  });
  getPlusInfoData().then(res => {
    dispatch(changePlusInfoAction(res));
  })
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeDiscountInfo: {},
    hotRecommendInfo: {},
    longForInfo: {},
    highScoreInfo: {},
    goodPriceInfo: {},
    plusInfo: {},
  },
  reducers: {
    changeHomeDiscountInfoAction(state, { payload }) {
      state.homeDiscountInfo = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.hotRecommendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    }
  }
});

export const { changeHomeDiscountInfoAction, changeRecommendInfoAction, changeLongForInfoAction, changeHighScoreInfoAction, changeGoodPriceInfoAction, changePlusInfoAction } = homeSlice.actions;
export default homeSlice.reducer;