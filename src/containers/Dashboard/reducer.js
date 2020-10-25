import produce from "immer";
import types from './constants';

export const initialState = {
    isLoading: false,
    userData: [],
    error: '',
    page: 1,
    per_page: 5,
    total: 0,
    total_pages: 1
}

const usersListReducer = (state = initialState, action) =>
    produce(state, draft => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case types.FETCH_USERS_LIST:
                draft.isLoading = true;
                break;
            case types.FETCH_USERS_LIST_SUCCESS:
                draft.isLoading = false;
                draft.userData = action.userData.data;
                draft.page = action.userData.page;
                draft.per_page = action.userData.per_page;
                draft.total = action.userData.total;
                draft.total_pages = action.userData.total_pages;
                break;
            case types.FETCH_USERS_LIST_ERROR:
                draft.isLoading = false;
                draft.error = action.error;
        }
    });

export default usersListReducer;