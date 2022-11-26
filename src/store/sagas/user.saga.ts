import { takeLatest, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPE } from "../actions/user.action";
export function* onSignUpSuccess() {
    yield takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, alertSignUpSuccess);
}

const alertSignUpSuccess = () => {
    alert("Sign up Sucessfully");
}

export function* userSaga() {
    yield call(onSignUpSuccess)
}