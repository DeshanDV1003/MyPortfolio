import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error("❌ Missing Supabase URL");
}
if (!supabaseAnonKey) {
  console.error("❌ Missing Supabase Anon Key");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
