import * as actionTypes from './contants';


const initialValue = {
  // 加载状态
  isLoading: false,
  // 当前页码
  currentPage: 0,
  // 数据总数
  totalCount: 0,
  // 房间列表数据
  roomList: []
}

const reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: payload };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: payload };
    case actionTypes.CHANGE_ROOM_LIST:
      return { ...state, roomList: payload };
    default:
      return state;
  }
};

export default reducer;