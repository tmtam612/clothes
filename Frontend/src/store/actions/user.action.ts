import { FC } from 'react';
import { put, call } from 'redux-saga/effects';
import { createUserWithEmailAndPassword } from "../../services/user.service";

export const enum USER_ACTION_TYPE {
    SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS",
    SIGN_UP_FAILED = "SIGN_UP_FAILED",
};
export const SIGNIN = "SIGN_IN";

type User = {
    email: String;
    password: String;
    confirmPassword: String;
}

type reponseUser = {
    email: String;
    password: String;
}

export function* singup(user: User) {
    try {
        const response: reponseUser = yield call(createUserWithEmailAndPassword, user.email, user.password);
        if (response) {
            yield put({type: USER_ACTION_TYPE.SIGN_UP_SUCCESS, payload: response});
        }
    } catch (error) {
        yield put({type: USER_ACTION_TYPE.SIGN_UP_FAILED, payload: error});
    }
}