// auth.guard.ts
import { auth } from '@/auth';

export async function requireAdmin() {
  const session = await auth();
  if (session?.user?.role !== 'admin') {
    return { redirect: { destination: '/unauthorized', permanent: false } };
  }
  return session;
}
