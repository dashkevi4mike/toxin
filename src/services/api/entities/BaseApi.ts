import { HttpActions } from '../HttpActions';
import { IHeaders, ServerErrorKey, IApiResponse, Converter } from '../types';
import { IStorage } from '../storage';
import { makeApiError } from '../errors';
import { isDataResponse } from '../types/guards';

import { AxiosResponse } from 'axios';

class BaseApi {
  protected actions: HttpActions;
  protected _token: string | null = null;
  protected storage: IStorage;

  constructor(actions: HttpActions, storage: IStorage) {
    this.actions = actions;
    this.storage = storage;
  }

  set token(value: string | null) {
    this._token = value;
  }

  protected handleResponse<ResponseData, E extends ServerErrorKey, ErrorPayload>(
    response: AxiosResponse<IApiResponse<ResponseData, E, ErrorPayload>>,
    converter?: null,
    errorPayloadConverter?: (x: ErrorPayload) => any,
  ): void;
  protected handleResponse<ResponseData, E extends ServerErrorKey, ErrorPayload, Result>(
    response: AxiosResponse<IApiResponse<ResponseData, E, ErrorPayload>>,
    converter: Converter<ResponseData, Result>,
    errorPayloadConverter?: (x: ErrorPayload) => any,
  ): Result;
  protected handleResponse<ResponseData, E extends ServerErrorKey, ErrorPayload, Result>(
    response: AxiosResponse<IApiResponse<ResponseData, E, ErrorPayload>>,
    converter?: Converter<ResponseData, Result> | null,
    errorPayloadConverter?: (x: ErrorPayload) => any,
  ): Result | void {
    const responseData = (() => {
      if (isDataResponse<ResponseData>(response.data)) {
        return response.data.data;
      } else {
        return response.data;
      }
    })();
    // TODO: Add typings
    if ((response.data as any).error) {
      const request: XMLHttpRequest = response.request;
      const apiError = makeApiError<ErrorPayload, any>({
        config: response.config,
        status: response.status,
        data: responseData,
        headers: response.headers,
        request,
        response: request.response,
        payloadConverter: errorPayloadConverter,
      });
      throw apiError;
    }
    if (converter) {
      return converter(responseData as ResponseData);
    }
  }

  protected get privateHeaders(): IHeaders {
    if (!this._token && !this.storage.get<string | null>('token', null)) {
      throw new Error('Api token not found!');
    }
    return { Authorization: `Token ${this._token || this.storage.get<string | null>('token', null)}` };
  }

}

export default BaseApi;
