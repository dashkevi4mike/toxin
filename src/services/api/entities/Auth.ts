import { autobind } from 'core-decorators';

import { SignInPayload, SignUpPayload } from 'shared/types/models';

import { HttpActions } from '../HttpActions';

import BaseApi from './BaseApi';
import { IStorage, storageKeys } from '../storage';
import {
  convertSignInRequest, convertSignInResponse,
  convertSignUpResponse, convertSignUpRequest } from '../converters/auth';
import { SignInResponse, SignUpResponse } from '../types';

class Auth extends BaseApi {
  public onTokenChanged: (token: string | null) => void;

  constructor(actions: HttpActions, storage: IStorage, onTokenChanged: (token: string | null) => void) {
    super(actions, storage);
    this.onTokenChanged = onTokenChanged;
  }

  @autobind
  public async signUp(data: SignUpPayload) {
    const response =
      await this.actions.post<SignUpResponse>('/api//', convertSignUpRequest(data));
    const { key } = this.handleResponse(response, convertSignUpResponse);

    this.saveToken(key);
  }

  @autobind
  public async signIn({ email, password }: SignInPayload): Promise<void> {
    const response = await this.actions.post<SignInResponse>('//',
      convertSignInRequest({ email, password }));
    const { key } = this.handleResponse(response, convertSignInResponse);

    this.saveToken(key);
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
