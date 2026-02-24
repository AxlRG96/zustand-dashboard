import { create, type StateCreator } from "zustand";
import { StateStorage, persist, createJSONStorage } from "zustand/middleware";

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

  setFirstName: (value: string) => set((state) => ({ firstName: value })),
  setLastName: (value: string) => set((state) => ({ lastName: value })),
});

const sessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    console.log({ nameFunction: "getItem", name });
    return null;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    console.log({ nameFunction: "setItem", name, value });
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log({ nameFunction: "removeItem", name });
  },
};

export const usePersonStore = create<PersonStore>()(
  persist(storeAPI, {
    name: "person-storage",
    storage: createJSONStorage(() => sessionStorage),
  }),
);
