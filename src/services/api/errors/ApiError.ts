import { AppError } from 'shared/types/AppError';
import { IHeaders } from '../types';

import { AxiosRequestConfig } from 'axios';

export interface IApiError<T> {
  config: AxiosRequestConfig;
  status: number;
  headers: IHeaders;
  request: XMLHttpRequest;
  response: any; // response from XMLHttpRequest
  code: string;
  payload?: T;
}
export interface IApiError<T> {
  config: AxiosRequestConfig;
  status: number;
  headers: IHeaders;
  request: XMLHttpRequest;
  response: any; // response from XMLHttpRequest
  code: string;
  payload?: T;
}

export default class ApiError<T> extends AppError {
  public config: AxiosRequestConfig;
  public status: number;
  public code: string;
  public headers: IHeaders;
  public request: XMLHttpRequest;
  public response: any;
  public payload?: T;

  constructor(params: IApiError<T>) {
    const { code, config, status, headers, request, response, payload } = params;
    super(response, 'API');
    this.config = config;
    this.status = status;
    this.code = code;
    this.headers = headers;
    this.request = request;
    this.response = response;
    this.payload = payload;
  }
}

export function isApiError(error: any): error is ApiError<any> {
  return error && error.code && error.status && error instanceof Error;
}

export function isServerError(error: any): boolean {
  return isApiError(error) && error.status > 500;
}
