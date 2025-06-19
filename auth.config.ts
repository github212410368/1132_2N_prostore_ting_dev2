// auth.config.ts
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        // 簡單的測試認證邏輯
        if (credentials?.username === 'test' && credentials?.password === 'test') {
          return { id: '1', name: 'Test User', email: 'test@example.com' };
        }
        return null; // 認證失敗
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  // Removed invalid 'authorized' callback. Add supported callbacks here if needed.
} satisfies NextAuthOptions;