import produce from "immer";
import types from './constants';

export const initialState = {
    isLoading: false,
    data: {},
    ad: {},
    error: '',
}

const usersDetailReducer = (state = initialState, action) =>
    produce(state, draft => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case types.FETCH_USER_DETAIL:
                draft.isLoading = true;
                break;
            case types.FETCH_USER_DETAIL_SUCCESS:
                draft.isLoading = false;
                draft.data = action.data.data;
                draft.ad = action.data.ad;
                break;
            case types.FETCH_USER_DETAIL_ERROR:
                draft.isLoading = false;
                draft.error = action.error;
        }
    });

export default usersDetailReducer;