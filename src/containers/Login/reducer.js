import produce from "immer";
import types from './constants';

export const initialState = {
    isLoading: false,
    success: false,
    error: '',
}

const loginReducer = (state = initialState, action) =>
    produce(state, draft => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case types.LOGIN_USER:
                draft.isLoading = true;
                break;
            case types.LOGIN_USER_SUCCESS:
                draft.isLoading = false;
                draft.success = true;
                break;
            case types.LOGIN_USER_ERROR:
                draft.isLoading = false;
                draft.error = action.error;
        }
    });

export default loginReducer;