/* eslint-disable no-useless-catch */
import { type StateStorage, createJSONStorage } from "zustand/middleware";
const firebaseURL = import.meta.env.VITE_FIREBASE_URL;
export const firebaseAPIStorage: StateStorage = {
  getItem: async function (name: string): Promise<string | null> {
    try {
      console.log({ env: firebaseURL });
      const dataFetch = await fetch(`${firebaseURL}/${name}.json`).then((res) =>
        res.json(),
      );
      return JSON.stringify(dataFetch);
    } catch (error) {
      throw error;
    }
  },

  setItem: async function (name: string, value: string): Promise<void> {
    try {
      console.log({ env: firebaseURL });
      await fetch(`${firebaseURL}/${name}.json`, {
        method: "PUT",
        body: value,
      }).then((res) => res.json());
    } catch (error) {
      throw error;
    }
  },

  removeItem: function (name: string): void | Promise<void> {
    console.log({ nameFunction: "removeItem", name });
  },
};

export const firebaseStorage = createJSONStorage(() => firebaseAPIStorage);
