import {create} from "zustand"


const usePhoneBookStore = create((set)=>({
    phoneBook : [],
    keyword:"",
    addContact:(name, phoneNumber) => set((state)=>({
        phoneBook:[...state.phoneBook, { id:Date.now(),name, phoneNumber }],
    })),
    setKeyword:(value)=>set(()=>({
        keyword:value,
    })),
}));
export default usePhoneBookStore;