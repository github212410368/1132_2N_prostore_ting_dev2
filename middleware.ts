// app/middleware.ts
import { withAuth } from 'next-auth/middleware';
import { authConfig } from '@/auth.config';

console.log('AUTH_SECRET in middleware:', process.env.AUTH_SECRET);

export default withAuth(
  // @ts-ignore (臨時忽略類型錯誤，待 v5 安裝完成後移除)
  authConfig
);

export const config = {
  matcher: ['/protected/:path*'],
};