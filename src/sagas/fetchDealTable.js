
import { call, put, takeEvery } from 'redux-saga/effects';
import fetItems from "../api/fetchDealTable" 
import actions from '../actions/';

function* fetchDealTable() {

    try {
        const items = yield call(fetItems)
        yield put(actions.dealTable.setItems(items))
       
    }
    catch (error) {

    }

};



  export function* fetchDealTableSaga() {
    yield takeEvery(actions.dealTable.load, fetchDealTable);
  }