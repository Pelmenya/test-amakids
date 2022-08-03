import { useAppSelector } from "../../hooks/use-app-selector"
import { getMazeBoardState } from "../../services/redux/selectors/maze-board/maze.board"
import { fieldBorder, maxWidthBoard } from "../../utils/setup-game";
import { Flex } from "../flex/flex";
import { FieldDescription } from "./components/field-description/field-description";
import { Field } from "./components/field/field";

import style from './maze-board.module.css';

export const MazeBoard = () => {
	const { axisX, axisY } = useAppSelector(getMazeBoardState);

	const fieldsArr: string[] = [];
	const fieldsDescriptionX: string[] = [];
	const fieldsDescriptionY: number[] = [];

	for (let i = 0; i < axisX; i++) {
		fieldsDescriptionX.push(`${String.fromCharCode(i + 65)}`)
		for (let j = 0; j < axisY; j++) {
			fieldsArr.push(`${String.fromCharCode(j + 65)}${i + 1}`)
			if (i === 0) fieldsDescriptionY.push(j + 1)
		}
	}

	return (
		<Flex className={style.wrapper} flexDirection='column'>
			<div className={style.container} style={{ maxWidth: maxWidthBoard }}>
				{fieldsDescriptionX.map(item => <FieldDescription key={item} id={item} />)}
			</div>
			<div className={style.container} style={{ maxWidth: maxWidthBoard }}>
				{fieldsArr.map(item => <Field key={item} id={item} />)}
				<div className={style.description} style={{ maxWidth: maxWidthBoard, left: - (20 + 2 * fieldBorder) }}>
					{fieldsDescriptionY.map(item => <FieldDescription key={item} id={item} />)}
				</div>
			</div>
		</Flex>
	)
}