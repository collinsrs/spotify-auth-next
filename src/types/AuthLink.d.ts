export interface AuthLink {
  params: AuthParams;
  authType: string;
  className?: string;
  children: React.ReactNode | string;
}
