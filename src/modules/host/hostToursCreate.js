import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest }  from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostToursCreateAPI from '../../lib/api/host/hostToursCreate';


const CHANGE_FIELD = 'hostToursCreate/CHANGE_FIELD';
const INITIALIZE_FORM = 'hostToursCreate/INITIALIZE_FORM';

const [CREATE, CREATE_SUCCESS, CREATE_FAILURE] = createRequestActionTypes(
    'hostToursCreate/CREATE',
);

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form,
    key,
    value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const create = createAction(CREATE, ({ title, image, price, closedDays, option, tags, refund_type, about }) => ({
    title,
    image,
    price,
    closedDays,
    option,
    tags,
    refund_type,
    about,
}));

const createSaga = createRequestSaga(CREATE, hostToursCreateAPI.create);
export function* hostToursCreateSaga() {
    yield takeLatest(CREATE, createSaga);
}



const initialState = {
    form: {
        title: '',
        image: null,
        price: null,
        closedDays: null,
        option: '',
        tags: null,
        refund_type: '가능',
        about: '',
    },
    hostToursCreate: null,
    hostToursCreateError: null,
}

const hostToursCreate = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: {form, key, value} }) =>
            produce(state, draft => {
                draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
            hostToursCreateError: null,
        }),
        [CREATE]: state => ({
            ...state,
            hostToursCreate: null,
            hostToursCreateError: null,
        }),
        [CREATE_SUCCESS]: (state, { payload: hostToursCreate }) => ({
            ...state,
            hostToursCreate,
        }),
        [CREATE_FAILURE]: (state, { payload: hostToursCreateError }) => ({
            ...state,
            hostToursCreateError,
        })
    },
    initialState,
);

export default hostToursCreate;
