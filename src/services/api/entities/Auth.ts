import { autobind } from 'core-decorators';

import { IAuthData, IAuthByPasswordData, INewAccountData } from 'shared/types/auth';

import { HttpActions } from '../HttpActions';

import BaseApi from './BaseApi';
import { IStorage, storageKeys } from '../storage';
import {
  convertAuthRequest, convertAuthResponse,
  convertRegResponse, convertAccountToServer } from '../converters/auth';
import { IAuthResponse, IRegResponse } from '../types';

class Auth extends BaseApi {
  public onTokenChanged: (token: string | null) => void;

  constructor(actions: HttpActions, storage: IStorage, onTokenChanged: (token: string | null) => void) {
    super(actions, storage);
    this.onTokenChanged = onTokenChanged;
  }

  @autobind
  public async signUp(data: INewAccountData) {
    const response =
      await this.actions.post<IRegResponse>('/api/v1/users/', convertAccountToServer(data));
    const regData = this.handleResponse(response, convertRegResponse);

    const { key } = regData;
    this.saveToken(key);
    return regData;
  }

  @autobind
  public async signIn({ email, password, name, lastname }: IAuthByPasswordData): Promise<IAuthData> {
    const response = await this.actions.post<IAuthResponse>('/api-token-auth/',
      { email, password, name, lastname });
    const authData = this.handleResponse(response, convertAuthResponse);

    const { key } = authData;

    this.saveToken(key);
    return authData;
  }

  @autobind
  public async checkToken() {
    const token = this.getToken();
    if (token) {
      this.onTokenChanged(token);
      return true;
    } else {
      return false;
    }
  }

  @autobind
  public getToken(): string | null {
    return this.storage.get<string | null>('token', null);
  }

  @autobind
  public saveToken(token: string) {
    this.storage.set(storageKeys.token, token);

    this.onTokenChanged(token);
  }

}

export default Auth;
