import { getMazeBoardState } from "../services/redux/selectors/maze-board/maze.board";
import { setSteps } from "../utils/functions/setSteps";
import { TArrow } from "../utils/types/arrow";
import { useAppSelector } from "./use-app-selector";

export const useMazeData = () => {
	const { axisX, axisY, stepsCount } = useAppSelector(getMazeBoardState);

	const fieldsArr: string[] = [];
	const fieldsDescriptionX: string[] = [];
	const fieldsDescriptionY: number[] = [];
	const steps: TArrow[] = setSteps(axisX, axisY, stepsCount);

	for (let i = 0; i < axisX; i++) {
		fieldsDescriptionX.push(`${String.fromCharCode(i + 65)}`)
		for (let j = 0; j < axisY; j++) {
			fieldsArr.push(`${j}${i}`)
			if (i === 0) fieldsDescriptionY.push(j + 1)
		}
	}

	return { fieldsArr, fieldsDescriptionX, fieldsDescriptionY, steps }
}