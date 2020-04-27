import { IAction, ICommunication, IPlainAction, IPlainFailAction } from 'shared/types/redux';

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

export type SignUpPayload = {
  email: string;
  password: string;
  name: string;
  lastName: string;
  news: boolean;
}

export type SignInAction = IAction<'AUTH:SIGN_IN', SignInPayload>;
export type SignInActionSuccess = IPlainAction<'AUTH:SIGN_IN_SUCCESS'>;
export type SignInActionFail = IPlainFailAction<'AUTH:SIGN_IN_FAIL'>;

export type SignUpAction = IAction<'AUTH:SIGN_UP', SignUpPayload>;
export type SignUpActionSuccess = IPlainAction<'AUTH:SIGN_UP_SUCCESS'>;
export type SignUpActionFail = IPlainFailAction<'AUTH:SIGN_UP_FAIL'>;

export type Action = SignInAction | SignInActionSuccess | SignInActionFail | SignUpAction | SignUpActionSuccess | SignUpActionFail;
