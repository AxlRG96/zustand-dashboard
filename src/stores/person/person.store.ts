import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { firebaseStorage } from "../storages";

interface PersonState {
  firstName: string;
  lastName: string;
}

interface PersonActions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

type PersonStore = PersonState & PersonActions;

const storeAPI: StateCreator<PersonStore> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstName: (value: string) => set({ firstName: value }),
  setLastName: (value: string) => set({ lastName: value }),
});

export const usePersonStore = create<PersonStore>()(
  persist(storeAPI, {
    name: "person-storage",
    storage: firebaseStorage,
  }),
);
