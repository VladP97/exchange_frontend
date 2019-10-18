import "regenerator-runtime/runtime";
import { all } from 'redux-saga/effects';
import { fetchDealTableSaga } from './fetchDealTable.js';


export default function* rootSaga() {
    yield all([
        fetchDealTableSaga(),
    ]);
  }

