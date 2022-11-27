import { put, call } from "redux-saga/effects";
import { createUserWithEmailAndPassword } from "../../services/user.service";

export const enum USER_ACTION_TYPE {
    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
    SIGN_UP_FAILED = "SIGN_UP_FAILED",
    SIGN_UP_START = "SIGN_UP_START",
};
export const SIGNIN = "SIGN_IN";

type User = {
    email: String;
    name: String;
    password: String;
    confirmPassword: String;
}

export type startSignUp = {
    type: USER_ACTION_TYPE.SIGN_UP_START,
    payload: User
};

export function* signup({
  payload: { email, name, password },
}: startSignUp) {
    try {
        const response: Promise<User> = yield call(createUserWithEmailAndPassword, email, name, password);
        if (response) {
            yield put({type: USER_ACTION_TYPE.SIGN_UP_SUCCESS, payload: response});
        }
    } catch (error) {
        yield put({type: USER_ACTION_TYPE.SIGN_UP_FAILED, payload: error});
    }
}

export function startSignup(formFields: User) {
    return {
        type: USER_ACTION_TYPE.SIGN_UP_START,
        payload: formFields
    }
}