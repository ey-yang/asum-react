import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import post, { postSaga } from './post';
import posts, { postsSaga } from './posts';
import counter from './counter'
import tour from './tour'
import host, {hostSaga} from './host/host';
import hostToursCreate, { hostToursCreateSaga } from './host/hostToursCreate';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  post,
  posts,
  counter,
  tour,
  host,
  hostToursCreate,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), postSaga(), postsSaga(), hostSaga(), hostToursCreateSaga()]);
}

export default rootReducer;