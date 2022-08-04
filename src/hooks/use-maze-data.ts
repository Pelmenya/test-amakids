import { getMazeBoardState } from "../services/redux/selectors/maze-board/maze.board";
import { setGame } from "../utils/functions/setGame";
import { useAppSelector } from "./use-app-selector";

export const useMazeData = () => {
	const { axisX, axisY, stepsCount } = useAppSelector(getMazeBoardState);

	const fieldsDescriptionX: string[] = [];
	const fieldsDescriptionY: number[] = [];
	const { steps, startId, endId, board } = setGame(axisX, axisY, stepsCount);

	for (let i = 0; i < axisX; i++) {
		fieldsDescriptionX.push(`${String.fromCharCode(i + 65)}`)
	};

	for (let j = 0; j < axisY; j++) {
		fieldsDescriptionY.push(j + 1)
	};

	const fieldsArr = board.map(item => item.id || '')


	return { 
		fieldsArr, 
		fieldsDescriptionX, 
		fieldsDescriptionY, 
		steps, 
		startId, 
		endId 
	}
}