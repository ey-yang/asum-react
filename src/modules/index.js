import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import counter from './counter'
import tour, { tourSaga } from './tour'
import tours, { toursSaga } from './tours'
import host, { hostSaga } from './host/host';
import hostToursCreate, { hostToursCreateSaga } from './host/hostToursCreate';
import hostToursList, { hostListSaga } from './host/hostToursList';
import hostSalesList, { hostSalesListSaga } from './host/hostSalesList';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  counter,
  tour,
  tours,

  host,
  hostToursCreate,
  hostToursList,
  hostSalesList,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), toursSaga(), tourSaga(),
    hostSaga(), hostToursCreateSaga(), hostListSaga(), hostSalesListSaga()]);
}

export default rootReducer;