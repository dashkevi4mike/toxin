import ApiError from './ApiError';
import { IErrorResponse, IHeaders } from '../types';

import { AxiosRequestConfig } from 'axios';

export interface IApiErrorArgs<ServerPayload, Payload> {
  config: AxiosRequestConfig;
  status: number;
  headers: IHeaders;
  request: XMLHttpRequest;
  response: any; // response from XMLHttpRequest
  data: IErrorResponse<ServerPayload>;
  payloadConverter?: (x: ServerPayload) => Payload;
}

export default function makeApiError<ServerPayload, Payload>(
  params: IApiErrorArgs<ServerPayload, Payload>,
): ApiError<Payload> {
  const { config, status, data, headers, request, response, payloadConverter } = params;
  return new ApiError<Payload>({
    config,
    status,
    code: data.errors && data.errors.code ? data.errors.code : data.code!,
    headers,
    request,
    response,
    payload: payloadConverter && data.errors && data.errors.payload && payloadConverter(data.errors.payload),
  });
}
