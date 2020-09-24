import { createAction, handleActions } from 'redux-actions';
import { takeLatest }  from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as hostSalesAPI from '../../lib/api/host/hostSales';

const [SALES_LIST, SALES_LIST_SUCCESS, SALES_LIST_FAILURE, ] = createRequestActionTypes('hostSalesList/SALES_LIST');

export const salesList = createAction(
    SALES_LIST,
    ({ key, salesDate, salesProduct, salesNumber, travelDay, addOne,
        addTwo, addThree, guestName, phoneNumber, Progress }) =>
    ({     key, salesDate, salesProduct, salesNumber, travelDay, addOne,
        addTwo, addThree, guestName, phoneNumber, Progress }),
);

const salesListSaga = createRequestSaga(SALES_LIST, hostSalesAPI.salesList);
export function* hostSalesListSaga() {
    yield takeLatest(SALES_LIST, salesListSaga);
}

const initialState = {
    hostSalesList: null,
    hostSalesListError: null,
};

const hostSalesList = handleActions (
    {
        [SALES_LIST_SUCCESS]: (state, { payload: hostSalesList }) => ({
            ...state,
            hostSalesList,
        }),
        [SALES_LIST_FAILURE]: (state, { payload: hostSalesListError }) => ({
            ...state,
            hostSalesListError,
        }),
    },
    initialState,
)

export default hostSalesList;