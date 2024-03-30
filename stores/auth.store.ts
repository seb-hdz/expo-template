import { create } from "zustand";

interface AuthState {
  uid: string | null;
  status: "authenticated" | "anonymous" | "unknown";
}

interface AuthActions {
  setUid: (uid: string | undefined) => void;
  setStatus: (status: AuthState["status"]) => void;
  reset: () => void;
}

const useAuthStore = create<AuthState & AuthActions>((set) => ({
  uid: null,
  status: "unknown",
  setUid: (uid) => set({ uid }),
  setStatus: (status) => set({ status }),
  reset: () => set({ uid: null, status: "unknown" }),
}));

export default useAuthStore;
