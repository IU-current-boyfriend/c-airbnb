import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeDiscountData } from "@/services/modules/home";

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
  })
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homeDiscountInfo: {}
  },
  reducers: {
    changeHomeDiscountInfoAction(state, { payload }) {
      state.homeDiscountInfo = payload;
    }
  }
});

export const { changeHomeDiscountInfoAction } = homeSlice.actions;
export default homeSlice.reducer;