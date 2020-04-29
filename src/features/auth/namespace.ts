import { IAction, ICommunication, IPlainAction, IPlainFailAction } from 'shared/types/redux';
import { SignInPayload, SignUpPayload, ResetPasswordPayload } from 'shared/types/models';

export interface IReduxState {
  communications: {
    signIn: ICommunication;
    signUp: ICommunication;
    resetPassword: ICommunication;
  }
}

export type SignInAction = IAction<'AUTH:SIGN_IN', SignInPayload>;
export type SignInActionSuccess = IPlainAction<'AUTH:SIGN_IN_SUCCESS'>;
export type SignInActionFail = IPlainFailAction<'AUTH:SIGN_IN_FAIL'>;

export type SignUpAction = IAction<'AUTH:SIGN_UP', SignUpPayload>;
export type SignUpActionSuccess = IPlainAction<'AUTH:SIGN_UP_SUCCESS'>;
export type SignUpActionFail = IPlainFailAction<'AUTH:SIGN_UP_FAIL'>;

export type ResetPasswordAction = IAction<'AUTH:RESET_PASSWORD', ResetPasswordPayload>;
export type ResetPasswordActionSuccess = IPlainAction<'AUTH:RESET_PASSWORD_SUCCESS'>;
export type ResetPasswordActionFail = IPlainFailAction<'AUTH:RESET_PASSWORD_FAIL'>;

export type Action = SignInAction | SignInActionSuccess | SignInActionFail 
  | SignUpAction | SignUpActionSuccess | SignUpActionFail
  | ResetPasswordAction | ResetPasswordActionSuccess | ResetPasswordActionFail;
