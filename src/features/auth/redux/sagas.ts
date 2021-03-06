import { put, call, takeLatest, all } from 'redux-saga/effects';

import { IDependencies } from 'shared/types/app';
import { getErrorMsg } from 'shared/helpers/getErrorMsg';

import * as NS from '../namespace';
import * as actions from './actionCreators';

const signInType: NS.SignInAction['type'] = 'AUTH:SIGN_IN';
const signUpType: NS.SignUpAction['type'] = 'AUTH:SIGN_UP';
const resetPasswordType: NS.ResetPasswordAction['type'] = 'AUTH:RESET_PASSWORD';

function rootSaga(deps: IDependencies) {
  return function* saga() {
    yield all([
      takeLatest(signInType, signInSaga, deps),
      takeLatest(signUpType, signUpSaga, deps),
      takeLatest(resetPasswordType, resetPasswordSaga, deps),
    ]);
  };
}

export function* signUpSaga({ api }: IDependencies, action: NS.SignUpAction) {
  try {
    yield call(api.auth.signUp, action.payload);
    yield put(actions.signUpSuccess());
    // yield put(actions.checkUserAuth());
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.signUpFail(message));
  }
}

export function* signInSaga({ api }: IDependencies, action: NS.SignInAction) {
  try {
    yield call(api.auth.signIn, action.payload);
    yield put(actions.signInSuccess());
    // yield put(actions.checkUserAuth());
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.signInFail(message));
  }
}

export function* resetPasswordSaga({ api }: IDependencies, action: NS.ResetPasswordAction) {
  try {
    yield call(api.auth.resetPassword, action.payload);
    yield put(actions.resetPasswordSuccess());
    // yield put(actions.checkUserAuth());
  } catch (error) {
    const message = getErrorMsg(error);
    yield put(actions.resetPasswordFail(message));
  }
}


export { rootSaga };
