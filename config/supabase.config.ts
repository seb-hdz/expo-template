import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://aziwlvghgydexujpaauk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6aXdsdmdoZ3lkZXh1anBhYXVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE4MDYxODAsImV4cCI6MjAyNzM4MjE4MH0.PjUNveMy3qi_mwV7-Y4ZtjZFCKcXDwJdEofGZuWMb1g"
  // process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);

export default supabase;
