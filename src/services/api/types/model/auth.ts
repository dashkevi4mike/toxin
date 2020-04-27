export type TokenResponse = {
  key: string;
}

export type SignInResponse = TokenResponse;
export type SignUpResponse = TokenResponse;
export type ServerSignUpResponse = TokenResponse;
export type ServerSignInResponse = TokenResponse;


export type SignInRequest = {
  email: string;
  password: string;
}

export type SignUpRequest = {
  email: string;
  password1: string;
  password2: string;
  name: string;
  last_name: string;
  news: boolean;
}