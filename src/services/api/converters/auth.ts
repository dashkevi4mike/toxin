import { SignInPayload, SignUpPayload } from 'shared/types/models';
import { SignInRequest, SignUpRequest, SignInResponse, SignUpResponse,
  ServerSignInResponse, ServerSignUpResponse
 } from '../types';

export function convertSignInRequest(payload: SignInPayload): SignInRequest {
  return payload;
}

export function convertSignUpRequest(payload: SignUpPayload): SignUpRequest {
  const { name, lastName, email, password } = payload;
  return {
    name,
    email,
    password,
    last_name: lastName,
  }
}

export function convertSignInResponse(payload: ServerSignInResponse): SignInResponse {
  return payload;
}

export function convertSignUpResponse(payload: ServerSignUpResponse): SignUpResponse {
  return payload;
}