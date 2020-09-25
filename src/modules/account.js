import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';


const CHANGE_FIELD = 'account/CHANGE_FIELD';
const [
  WRITE_IMAGE,
  WRITE_IMAGE_SUCCESS,
  WRITE_IMAGE_FAILURE,
] = createRequestActionTypes('account/WRITE_IMAGE');

export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
  }));
  export const writeImage = createAction(WRITE_IMAGE, ({ images }) => ({ images }));

const writeImageSaga = createRequestSaga(WRITE_IMAGE, userAPI.writeImage);

export function* accountSaga() {
    yield takeLatest(WRITE_IMAGE, writeImageSaga);

  }


const initialState = {
  images: '',
};

const account = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => produce(state, draft => {
      draft[key] = value; // 예: state.register.username을 바꾼다
    }),
      [WRITE_IMAGE]: state => ({
        ...state,
        // post와 postError를 초기화
        image: null,
        
      }),
      // 포스트 작성 성공
      [WRITE_IMAGE_SUCCESS]: (state, { payload: user }) => ({
        ...state,
        user,
      }),
      // 포스트 작성 실패
      [WRITE_IMAGE_FAILURE]: (state, { payload: Error }) => ({
        ...state,
        userError: Error,
      }),
    },
    initialState,
);

export default account;