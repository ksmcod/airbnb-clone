import { User } from "@prisma/client";
import { create } from "zustand";

interface Props {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

const useUser = create<Props>((set) => ({
  user: null,
  setUser: (user: User) => set({ user: user }),
  clearUser: () => set({ user: null }),
}));

export default useUser;
