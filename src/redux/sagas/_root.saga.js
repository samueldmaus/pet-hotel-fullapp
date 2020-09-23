import { all } from 'redux-saga/effects';
import petsSaga from './petsSaga.js';
import ownersSaga from './ownersSaga.js';

export default function* rootSaga() {
  yield all([
    petsSaga(),
    ownersSaga(),
  ]);
}
