// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import { authConfig } from '@/auth.config';

console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('AUTH_SECRET:', process.env.AUTH_SECRET);

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);