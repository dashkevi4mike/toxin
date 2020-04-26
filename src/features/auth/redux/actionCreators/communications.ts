import { makeCommunicationActionCreators } from 'redux-make-communication';

import * as NS from '../../namespace';

export const {
  execute: signIn,
  completed: signInSuccess,
  failed: signInFail,
} = makeCommunicationActionCreators<NS.SignInAction, NS.SignInActionSuccess, NS.SignInActionFail>(
  'AUTH:SIGN_IN',
  'AUTH:SIGN_IN_SUCCESS',
  'AUTH:SIGN_IN_FAIL',
);

export const {
  execute: signUp,
  completed: signUpSuccess,
  failed: signUpFail,
} = makeCommunicationActionCreators<NS.SignUpAction, NS.SignUpActionSuccess, NS.SignUpActionFail>(
  'AUTH:SIGN_UP',
  'AUTH:SIGN_UP_SUCCESS',
  'AUTH:SIGN_UP_FAIL',
);