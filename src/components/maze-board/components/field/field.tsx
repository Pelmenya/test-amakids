
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getMazeBoardState } from '../../../../services/redux/selectors/maze-board/maze.board';
import { fieldBorder, maxWidthBoard } from '../../../../utils/setup-game';
import style from './field.module.css';

export interface IField {
	id: string;
}

export const Field = ({ id }: IField) => {
	const { axisX, startId } = useAppSelector(getMazeBoardState);

	return (
		<button 
			className={style.field} 
			style={{ 
				width: (maxWidthBoard / axisX) - fieldBorder * 2, 
				height: (maxWidthBoard / axisX) - fieldBorder * 2,
				margin: fieldBorder
			}}>{id === startId ? "СТАРТ" : <></>}
		</button >
	)
}