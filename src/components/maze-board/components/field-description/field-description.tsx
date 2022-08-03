
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getMazeBoardState } from '../../../../services/redux/selectors/maze-board/maze.board';
import { fieldBorder, maxWidthBoard } from '../../../../utils/setup-game';

import style from './field-description.module.css';

export interface IField {
	id: string | number;
}

export const FieldDescription = ({ id }: IField) => {
	const { axisX } = useAppSelector(getMazeBoardState);
	const isIdNumber = typeof id === 'number';
	return (
		<button 
			className={style.field} 
			style={{ 
				width: isIdNumber ? 20 : (maxWidthBoard / axisX) - fieldBorder * 2, 
				height: isIdNumber ? (maxWidthBoard / axisX) - fieldBorder * 2 : 20,
				margin: fieldBorder,
			}}>{id}
		</button >
	)
}