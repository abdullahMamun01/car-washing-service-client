import { RootState } from "@/redux/store";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  [key: string]: {
    isOpen: boolean;
  };
}

const initialState: ModalState = {};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = {
        isOpen: true,
      };
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload] = {
        isOpen: false,
      };
    },
  },
});

export default modalSlice.reducer;
export const { closeModal , openModal } = modalSlice.actions;
export const isOpenModal =  (state:RootState) => (name:string) => state?.modal[name]?.isOpen ?? false

