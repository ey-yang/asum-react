import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as userAPI from '../lib/api/user';
import { takeLatest } from 'redux-saga/effects';
import produce from 'immer';

// 프로필 이미지 업로드 액션
const CHANGE_FIELD = 'account/CHANGE_FIELD';
const [
  WRITE_IMAGE,
  WRITE_IMAGE_SUCCESS,
  WRITE_IMAGE_FAILURE,
] = createRequestActionTypes('account/WRITE_IMAGE');

// 유저 정보 읽어오는 액션
const READ_ACCOUNT = 'account/READ_ACCOUNT';
const UNLOAD_ACCOUNT = 'account/UNLOAD_ACCOUNT';

// 프로필 사진
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
  }));
  export const writeImage = createAction(WRITE_IMAGE, ({ images }) => ({ images }));
const writeImageSaga = createRequestSaga(WRITE_IMAGE, userAPI.writeImage);

// 계정 정보
export const readAccount = createAction(READ_ACCOUNT, id => id);
export const unloadAccount = createAction(UNLOAD_ACCOUNT);
const readAccountSaga = createRequestSaga(READ_ACCOUNT, userAPI.readAccount);

// saga 생성
export function* accountSaga() {
    yield takeLatest(WRITE_IMAGE, writeImageSaga);
    yield takeLatest(READ_ACCOUNT, readAccountSaga);

  }

const initialState = {
  images: '',
  user: null,
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

      [READ_ACCOUNT]: (state, {payload: user }) => (
        {
          ...state,
          user,
        }),
      [UNLOAD_ACCOUNT]: () => initialState,

    },
    initialState,
);

export default account;