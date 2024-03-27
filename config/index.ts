import z from "zod";

const envSchema = z.object({
  BASE_URL: z.string().url(),
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string(),
});

const envClient = envSchema.safeParse({
  BASE_URL: import.meta.env.BASE_URL,
  VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
});

if (!envClient.success) {
  console.error("❌ Invalid environment variables:", envClient.error.format());
  throw new Error("Invalid environment variables");
}

export const env = envClient.data;
