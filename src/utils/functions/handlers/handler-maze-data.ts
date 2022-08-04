import { setMazeData } from "../../../services/redux/slices/maze-board/maze-board";
import { AppDispatch } from "../../types/app-dispatch";
import { createMazeData } from "../create-maze-data";

export const handlerMazeData = (axisX: number, axisY: number, stepsCount: number, dispatch: AppDispatch) => {
	const {
		fieldsArr,
		fieldsDescriptionX,
		fieldsDescriptionY,
		steps,
		endId,
		startId,
	} = createMazeData(axisX, axisY, stepsCount);

	dispatch(setMazeData({
		fieldsArr,
		fieldsDescriptionX,
		fieldsDescriptionY,
		steps, 
		endId, 
		startId
	}));
}