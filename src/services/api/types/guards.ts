import { IDataResponse, IPaginatedResponse } from './response';
import { IErrorResponse, ServerErrorKey } from './errors';

export function isDataResponse<R>(data: any): data is IDataResponse<R> {
  return Boolean(data.data);
}

export function isPaginatedResponse<R>(data: any): data is IPaginatedResponse<R> {
  return ('results' in data) && ('count' in data);
}

export function isErrorResponse<E extends ServerErrorKey, P>(error: any): error is IErrorResponse<P, E> {
  return Object.keys(error).length === 1 && (error.code || error.errors.code);
}
