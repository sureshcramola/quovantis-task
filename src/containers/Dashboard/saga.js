import { put, takeLatest, call, all } from 'redux-saga/effects';
import { getUsersList } from '../../utils/apis';
import { getUsersListSuccess, getUsersListError } from './actions';
import types from './constants';

export function* fetchUsersListSaga(req) {
    let res;
    res = yield call(getUsersList, req.pageNo);
    try {
        console.log(res);
        yield put(getUsersListSuccess(res))
    } catch(error) {
        yield put(getUsersListError(error));
    }
}

export default function* usersListSaga() {
    yield all([
        takeLatest(types.FETCH_USERS_LIST, fetchUsersListSaga)
    ])
}
