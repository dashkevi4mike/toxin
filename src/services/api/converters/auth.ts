import { SignInPayload, SignUpPayload, ResetPasswordPayload } from 'shared/types/models';
import { 
  SignInRequest, SignUpRequest, 
  SignInResponse, SignUpResponse,
  ServerSignInResponse, ServerSignUpResponse, ServerResetPasswordResponse,
  ResetPasswordRequest, ResetPasswordResponse
 } from '../types';

export function convertSignInRequest(payload: SignInPayload): SignInRequest {
  return payload;
}

export function convertResetPasswordRequest(payload: ResetPasswordPayload): ResetPasswordRequest {
  return payload;
}

export function convertSignUpRequest(payload: SignUpPayload): SignUpRequest {
  const { name, lastName, email, password, news } = payload;
  return {
    name,
    email,
    password1: password,
    password2: password,
    news,
    last_name: lastName,
  }
}

export function convertSignInResponse(payload: ServerSignInResponse): SignInResponse {
  return payload;
}

export function convertSignUpResponse(payload: ServerSignUpResponse): SignUpResponse {
  return payload;
}

export function convertResetPasswordResponse(payload: ServerResetPasswordResponse): ResetPasswordResponse {
  return payload;
}