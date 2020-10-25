import actionCreator from '../../utils/actionCreators';
import types from './constants';

export const getUsersList = actionCreator(types.FETCH_USERS_LIST, 'pageNo');

export const getUsersListSuccess = actionCreator(
    types.FETCH_USERS_LIST_SUCCESS,
    'userData'
)

export const getUsersListError = actionCreator(
    types.FETCH_USERS_LIST_ERROR,
    'error'
)