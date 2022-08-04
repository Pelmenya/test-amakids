import { createSlice } from '@reduxjs/toolkit';
import { Action } from 'history';
import { initialAxisX, initialAxisY, initialStepCount } from '../../../../utils/setup-game';
import { TArrow } from '../../../../utils/types/arrow';

export interface IMazeBoardState {
	level: number;
	speed: number;
	stepsCount: number;
	axisX: number;
	axisY: number;
	fieldsArr: string[],
	fieldsDescriptionX: string[],
	fieldsDescriptionY: string[],
	steps: TArrow[],
	startId: string,
	endId: string,
}

export const initialMazeBoardState = {
	level: 1,
	speed: 1,
	stepsCount: initialStepCount,
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
			state.stepsCount = action.payload;
		},
		setMazeData: (state, action) => {
			state.startId = action.payload.startId;
			state.endId = action.payload.endId;
			state.fieldsArr = action.payload.fieldsArr;
			state.fieldsDescriptionX = action.payload.fieldsDescriptionX;
			state.fieldsDescriptionY = action.payload.fieldsDescriptionY;
			state.steps = action.payload.steps;
		}
	},
});

export const { 
	setLevel, 
	setSpeed, 
	setStepCount, 
	setMazeData 
} = mazeBoardSlice.actions;
export const mazeBoardReducer = mazeBoardSlice.reducer;
