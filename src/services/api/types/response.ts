import { IErrorResponse } from './errors';
import { ServerErrorKey } from 'services/api/types';

export interface IDataResponse<R> {
  data: R;
  request: XMLHttpRequest;
}

export interface IPaginatedResponse<R> {
  count: number;
  next: string;
  previous: string | null;
  results: R;
}

export interface IPaginatedResponse<R> {
  count: number;
  next: string;
  previous: string | null;
  results: R;
}

export type IApiResponse<
  R,
  C extends ServerErrorKey = ServerErrorKey,
  P = {}
  > = R | IDataResponse<R> | IErrorResponse<P, C>;

export type Converter<R, T> = (resp: R) => T;
