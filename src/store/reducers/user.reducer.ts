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

type ActionWithPayload = {
    type: String,
    payload?: any
}

export const UserReducer = (state = INITIAL_STATE, action: ActionWithPayload) => {
    switch (action.type) {
        case USER_ACTION_TYPE.SIGN_UP_START: {
            return {
                ...state, payload: action.payload
            };
        }
        case USER_ACTION_TYPE.SIGN_UP_SUCCESS: {
            return {
                ...state, payload: action.payload
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