import { makeCommunicationReducer } from 'redux-make-communication';
import { combineReducers } from 'redux';

import * as NS from '../../namespace';
import { initial } from '../initial';

// tslint:disable:max-line-length
export const communicationReducer = combineReducers<NS.IReduxState['communications']>({
  signIn: makeCommunicationReducer<
    NS.SignInAction,
    NS.SignInActionSuccess,
    NS.SignInActionFail
    >(
      'AUTH:SIGN_IN',
      'AUTH:SIGN_IN_SUCCESS',
      'AUTH:SIGN_IN_FAIL',
      initial.communications.signIn,
    ),
  signUp: makeCommunicationReducer<
    NS.SignUpAction,
    NS.SignUpActionSuccess,
    NS.SignUpActionFail
    >(
      'AUTH:SIGN_UP',
      'AUTH:SIGN_UP_SUCCESS',
      'AUTH:SIGN_UP_FAIL',
      initial.communications.signUp,
    ),
});