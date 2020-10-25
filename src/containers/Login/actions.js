import actionCreator from '../../utils/actionCreators';
import types from './constants';

export const loginUser = actionCreator(types.LOGIN_USER, 'payload');

export const loginUserSuccess = actionCreator(
    types.LOGIN_USER_SUCCESS,
    'success'
)

export const loginUserError = actionCreator(
    types.LOGIN_USER_ERROR,
    'error'
)