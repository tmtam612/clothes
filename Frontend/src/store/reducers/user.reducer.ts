import { AnyAction } from 'redux';
import { USER_ACTION_TYPE } from "../actions/user.action";

export type UserState = {
    readonly currentUser: {} | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const UserReducer = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case USER_ACTION_TYPE.SIGN_UP_SUCCESS: {
            return {
                ...state,
            };
        }
        case USER_ACTION_TYPE.SIGN_UP_FAILED: {
            return {
                ...state,
                error: action.payload
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}