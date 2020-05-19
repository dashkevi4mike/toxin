import ApiError from './ApiError';

export interface IApiErrorPayload {
  apiError: ApiError<{}>;
  responseData: any;
  requestData: any;
}

export type ApiErrorInterceptor = (payload: IApiErrorPayload) => void;
