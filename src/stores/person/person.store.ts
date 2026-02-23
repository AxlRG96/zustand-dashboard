import { create } from "zustand";

interface PersonState {
    firstName: string;
    lastName: string;

}

interface PersonActions {
    setFirstName : (value:string) => void
    setLastName : (value:string) => void
}

type PersonStore = PersonState & PersonActions

export const usePersonStore = create<PersonStore>()((set)=> ({

    firstName: "",
    lastName: "",

    setFirstName: (value: string) => set(state => ({firstName: value})),
    setLastName: (value:string) => set(state => ({lastName: value}))

}));
