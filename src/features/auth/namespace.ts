import { IAction, ICommunication, IPlainFailAction } from 'shared/types/redux';

export interface IReduxState {
  communications: {
    signIn: ICommunication;
    signUp: ICommunication;
  }
}

export type SignInPayload = {
  email: string;
  password: string;
}

export type SignInSuccessPayload = {
  key: string;
}

export type SignUpPayload = {
  email: string;
  password: string;
}

export type SignUpSuccessPayload = {
  key: string;
}

export type SignInAction = IAction<'AUTH:SIGN_IN', SignInPayload>;
export type SignInActionSuccess = IAction<'AUTH:SIGN_IN_SUCCESS', SignInSuccessPayload>;
export type SignInActionFail = IPlainFailAction<'AUTH:SIGN_IN_FAIL'>;

export type SignUpAction = IAction<'AUTH:SIGN_UP', SignUpPayload>;
export type SignUpActionSuccess = IAction<'AUTH:SIGN_UP_SUCCESS', SignUpSuccessPayload>;
export type SignUpActionFail = IPlainFailAction<'AUTH:SIGN_UP_FAIL'>;

export type Action = SignInAction | SignInActionSuccess | SignInActionFail | SignUpAction | SignUpActionSuccess | SignUpActionFail;
