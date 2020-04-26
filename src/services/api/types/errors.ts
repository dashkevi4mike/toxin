export interface IErrorResponse<T, C extends ServerErrorKey = ServerErrorKey> {
  errors?: {
    code: C;
    payload?: T;
  };
  code?: C;
}

export type ServerErrorKey = IServerErrors[keyof IServerErrors];

export interface IServerErrors {
  paramsError: 'PARAMS_ERROR';
}

export const serverErrors: IServerErrors = {
  paramsError: 'PARAMS_ERROR',
};
