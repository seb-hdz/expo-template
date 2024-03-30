import supabase from "@/config/supabase.config";
import useAuthStore from "@/stores/auth.store";
import { useCallback, useMemo } from "react";

const useAuth = () => {
  const setUid = useAuthStore((s) => s.setUid);
  const setStatus = useAuthStore((s) => s.setStatus);
  const reset = useAuthStore((s) => s.reset);

  const listenAuthState = useCallback(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      const { user } = session ?? {};
      const { id: uid, role } = user ?? {};
      setUid(uid);
      setStatus(role === "authenticated" ? "authenticated" : "anonymous");
      if (event === "SIGNED_OUT") reset();
    });
    return data.subscription.unsubscribe;
  }, []);

  const signInAnonymously = useCallback(async () => {
    const { data, error } = await supabase.auth.signInAnonymously();
    if (error) throw new Error(error.message);
    return data;
  }, []);

  const signInWithPassword = useCallback(
    async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw new Error(error.message);
      return data;
    },
    []
  );

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  }, []);

  return useMemo(
    () => ({ signInAnonymously, signInWithPassword, signOut, listenAuthState }),
    []
  );
};

export default useAuth;
