import {all} from 'redux-saga/effects';
import * as demo from './demoSaga';

export default function* root () {
  yield all([
    demo.mySaga
  ]);
}
