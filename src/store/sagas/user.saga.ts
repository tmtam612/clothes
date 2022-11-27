import { takeLatest, all, fork } from 'redux-saga/effects';

import { USER_ACTION_TYPE, signup } from "../actions/user.action";
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, alertSignUpSuccess);
}

export function* onSignUpStart() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signup);
}

const alertSignUpSuccess = () => {
    alert("Sign up Sucessfully");
}

export function* userSaga() {
    yield all([fork(onSignUpSuccess), fork(onSignUpStart)]);
}