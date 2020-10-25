import { put, takeLatest, call, all } from 'redux-saga/effects';
import { getUserDetail } from '../../utils/apis';
import { getUserDetailSuccess, getUserDetailError } from './actions';
import types from './constants';

export function* fetchUserDetailSaga(req) {
    let res;
    res = yield call(getUserDetail, req.userId);

    try {
        yield put(getUserDetailSuccess(res))
    } catch(error) {
        yield put(getUserDetailError(error));
    }
}

export default function* userDetailSaga() {
    yield all([
        takeLatest(types.FETCH_USER_DETAIL, fetchUserDetailSaga)
    ])
}
