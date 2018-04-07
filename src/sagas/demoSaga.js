import {takeEvery} from 'redux-saga/effects';

function* fetchUser() {

}

export function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
