
import {createStore, applyMiddleware} from "redux";
import combine from "./reducers/index";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(
    combine,
    applyMiddleware(sagaMiddleware)
    );
    sagaMiddleware.run(rootSaga)
