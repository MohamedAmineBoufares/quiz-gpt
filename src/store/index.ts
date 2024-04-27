import { Payload } from "@/types";
import { create } from "zustand";

interface State {
  storedContent: Payload | null;
  storeContent: (storedContent: Payload) => void;
}

export const useStore = create<State>()((set) => ({
  storedContent: null,
  storeContent: (storedContent) => set((state) => ({ storedContent })),
}));
