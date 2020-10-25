import actionCreator from '../../utils/actionCreators';
import types from './constants';

export const getUserDetail = actionCreator(types.FETCH_USER_DETAIL, 'userId');

export const getUserDetailSuccess = actionCreator(
    types.FETCH_USER_DETAIL_SUCCESS,
    'data'
)

export const getUserDetailError = actionCreator(
    types.FETCH_USER_DETAIL_ERROR,
    'error'
)