import { all } from 'redux-saga/effects';
import loginSaga from "./containers/Login/saga";
import usersListSaga from "./containers/Dashboard/saga";
import userDetailSaga from "./containers/UserDetail/saga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    usersListSaga(),
    userDetailSaga()
  ]);
}
