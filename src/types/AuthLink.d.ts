export interface AuthLink {
  params: AuthParams;
  authType: string;
  className?: string;
  children: React.ReactNode | string;
}

export interface AuthParams {
  clientId: string;
  responseType: string;
  redirectUri: string;
  state?: string;
  scopes?: string[];
  code_challenge_method: string;
  code_challenge: string;
}
