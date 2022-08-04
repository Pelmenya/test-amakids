import { useAppSelector } from "../../hooks/use-app-selector";
import { getMazeBoardState } from "../../services/redux/selectors/maze-board/maze.board";
import { fieldBorder, maxWidthBoard } from "../../utils/setup-game";
import { Flex } from "../flex/flex";
import { StepArrow } from "../step-arrow/step-arrow";
import { FieldDescription } from "./components/field-description/field-description";
import { Field } from "./components/field/field";

import style from './maze-board.module.css';

export const MazeBoard = () => {
	const { 
		fieldsArr, 
		fieldsDescriptionX, 
		fieldsDescriptionY, 
		steps, 
	} = useAppSelector(getMazeBoardState);
	
	if (!steps)	return null;

	return (
		<Flex flexDirection='column'>
			<div className={style.container} style={{ maxWidth: maxWidthBoard }}>
				{fieldsDescriptionX.map(item => <FieldDescription key={item} id={item} />)}
			</div>
			<div className={style.container} style={{ maxWidth: maxWidthBoard }}>
				{fieldsArr.map(item => <Field key={item} id={item} />)}
				<div className={style.description} style={{ maxWidth: maxWidthBoard, left: - (20 + 2 * fieldBorder) }}>
					{fieldsDescriptionY.map(item => <FieldDescription key={item} id={item} />)}
				</div>
			</div>
			<Flex className={style.wrapper} flexDirection='column'>
				<div className={style.steps} >
					{steps.map((item, index) => <StepArrow type={item} key={index} />)}
				</div>
			</Flex>
		</Flex>
	)
}