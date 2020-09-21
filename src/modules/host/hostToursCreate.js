import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';


const CHANGE_FIELD = 'hostToursCreate/CHANGE_FIELD';
const INITIALIZE_FORM = 'hostToursCreate/INITIALIZE_FORM';

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
    form,
    key,
    value,
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

const initialState = {
    form: {
        name: '',
        images: null,
        price: null,
        closedDays: null,
        option: '',
        tags: null,
        about: '',
        refund_type: '가능',
    }
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
        }),
        
    },
    initialState,
);

export default hostToursCreate;
