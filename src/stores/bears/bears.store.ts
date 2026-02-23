import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
}

interface BearState {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  computed: {
    totalBears: number;
  };

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;

  doNothing: () => void;
  addBear: () => void;
  clearBears: () => void;
}

export const useBearStore = create<BearState>()((set, get) => ({
  blackBears: 0,
  polarBears: 5,
  pandaBears: 1,

  bears: [
    { id: 1, name: "Yogi" },
    { id: 2, name: "Paddington" },
    { id: 3, name: "Baloo" },
  ],

  computed: {
    get totalBears(): number {
      const totalReturn =
        get().blackBears +
        get().pandaBears +
        get().polarBears +
        get().bears.length;
      return totalReturn;
    },
  },

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
  //*! Funciones para actualizar el estao de los osos
  doNothing: () => set((state) => ({ bears: [...state.bears] })),
  addBear: () =>
    set((state) => ({
      bears: [
        ...state.bears,
        {
          id: state.bears.length + 1,
          name: `Oso # ${state.bears.length + 1} `,
        },
      ],
    })),
  clearBears: () => set({ bears: [] }),
}));
