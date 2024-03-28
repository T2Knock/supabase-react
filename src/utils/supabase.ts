import { env } from "@/config";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  env.VITE_SUPABASE_URL,
  env.VITE_SUPABASE_ANON_KEY,
);
