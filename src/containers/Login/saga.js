import { put, takeLatest, call, all } from 'redux-saga/effects';
import { loginUser } from '../../utils/apis';
import { loginUserSuccess, loginUserError } from './actions';
import types from './constants';

export function* loginUserSaga(req) {
    let res;
    res = yield call(loginUser, req.payload.username, req.payload.password);
    
    try {
        yield put(loginUserSuccess('Logged in Successfully'))
    } catch(error) {
        yield put(loginUserError(error));
    }
}

export default function* loginSaga() {
    yield all([
        takeLatest(types.LOGIN_USER, loginUserSaga)
    ])
}
