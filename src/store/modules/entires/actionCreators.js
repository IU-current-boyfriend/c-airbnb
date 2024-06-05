import { getEntireRoomList } from '@/services/modules/entires';

import * as actionTypes from './contants';


export const changeLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_LOADING,
  payload: isLoading
});

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  payload: currentPage
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  payload: totalCount
});

export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  payload: roomList
});

export const fetchEntireDataAction = (page = 0) => {
  return async dispatch => {
    dispatch(changeLoadingAction(true));
    const res = await getEntireRoomList(page * 20);
    dispatch(changeLoadingAction(false));
    dispatch(changeCurrentPageAction(page));
    dispatch(changeTotalCountAction(res.totalCount));
    dispatch(changeRoomListAction(res.list));
  }
}