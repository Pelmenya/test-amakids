import { createSlice } from '@reduxjs/toolkit';
import { initialAxisX, initialAxisY, initialStepCount } from '../../../../utils/setup-game';
import { TArrow } from '../../../../utils/types/arrow';

export interface IMazeBoardState {
	level: number;
	speed: number;
	stepsCount: number;
	axisX: number;
	axisY: number;
	fieldsDisabled: boolean;
	fieldsArr: string[],
	fieldsDescriptionX: string[],
	fieldsDescriptionY: string[],
	steps: TArrow[],
	startId: string,
	endId: string,
	isWin: false,
}

export const initialMazeBoardState = {
	level: 1,
	speed: 1,
	stepsCount: initialStepCount,
	axisX: initialAxisX,
	axisY: initialAxisY,
	fieldsDisabled: true,
	isWin: false,
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
			state.fieldsDisabled = false;
		},
		setFieldsDisabled: (state, action) => {
			state.fieldsDisabled = action.payload;
		},
		setIsWin: (state, action) => {
			state.isWin = action.payload;
		}
	},
});

export const {
	setLevel,
	setSpeed,
	setStepCount,
	setMazeData,
	setFieldsDisabled,
	setIsWin
} = mazeBoardSlice.actions;
export const mazeBoardReducer = mazeBoardSlice.reducer;
