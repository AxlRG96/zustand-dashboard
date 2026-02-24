import { type StateStorage, createJSONStorage } from "zustand/middleware";

export const apiSessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    console.log({ nameFunction: "getItem", name });
    const data = sessionStorage.getItem(name);
    return data;
  },

  setItem: function (name: string, value: string): void | Promise<void> {
    console.log({ nameFunction: "setItem", name, value });
    sessionStorage.setItem(name, value);
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log({ nameFunction: "removeItem", name });
  },
};

export const customSessionStorage = createJSONStorage(() => apiSessionStorage);