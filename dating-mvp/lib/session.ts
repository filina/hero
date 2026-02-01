import { Session } from '@supabase/supabase-js';

export type AppSession = Session | null;

export function isAuthenticated(session: AppSession): session is Session {
  return Boolean(session?.user);
}
