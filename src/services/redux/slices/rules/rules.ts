import { createSlice } from '@reduxjs/toolkit';

export interface TRulesState {
  isOpen: boolean;
  isNeverOpen: boolean;
  level: number;
  speed: number;
  stepCount: number;
}

export const initialRulesState = {
  isOpen: true,
  level: 1,
  speed: 1,
  stepCount: 10,
  isNeverOpen: false,
} as TRulesState;

const rulesSlice = createSlice({
  name: 'rulesModal',
  initialState: initialRulesState,
  reducers: {
    setOpenRulesModal: (state, action) => {
      state.isOpen = action.payload;
    },
    setNeverOpenRulesModal: (state, action) => {
      state.isNeverOpen = action.payload;
    },
  },
});

export const { setOpenRulesModal, setNeverOpenRulesModal } = rulesSlice.actions;
export const rulesReducer = rulesSlice.reducer;
