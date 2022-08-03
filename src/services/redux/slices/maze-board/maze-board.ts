import { createSlice } from '@reduxjs/toolkit';
import { initialAxisX, initialAxisY, initialStepCount } from '../../../../utils/setup-game';

export interface IMazeBoardState {
	level: number;
	speed: number;
	stepCount: number;
	axisX: number;
	axisY: number;
}

export const initialMazeBoardState = {
	level: 1,
	speed: 1,
	stepCount: initialStepCount,
	axisX: initialAxisX,
	axisY: initialAxisY,
} as IMazeBoardState;

const mazeBoardSlice = createSlice({
	name: 'mazeBoard',
	initialState: initialMazeBoardState,
	reducers: {
		setLevel: (state, action) => {
			state.level = action.payload;
		},
		setSpeed: (state, action) => {
			state.speed = action.payload;
		},
		setStepCount: (state, action) => {
			state.stepCount = action.payload;
		},
	},
});

export const { setLevel, setSpeed, setStepCount } = mazeBoardSlice.actions;
export const mazeBoardReducer = mazeBoardSlice.reducer;
