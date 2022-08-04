
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getMazeBoardState } from '../../../../services/redux/selectors/maze-board/maze.board';
import { fieldBorder, maxWidthBoard } from '../../../../utils/setup-game';
import style from './field.module.css';

import over from '../../../../images/game-over.svg';
import ok from '../../../../images/ok.svg';
import start from '../../../../images/start.svg';
import { useEffect, useState } from 'react';
import { Nullable } from '../../../../utils/types/nullable';
import { useAppDispatch } from '../../../../hooks/use-app-dispatch';
import { setFieldsDisabled, setIsWin } from '../../../../services/redux/slices/maze-board/maze-board';
export interface IField {
	id: string;
}

export const Field = ({ id }: IField) => {
	const dispatch = useAppDispatch();
	const { axisX, startId, endId, fieldsDisabled, fieldsArr } = useAppSelector(getMazeBoardState);
	const [picture, setPicture] = useState<Nullable<string>>(null)

	useEffect(() => {
		if (startId === id) {
			setPicture(start)
		} else setPicture(null)
	}, [startId, endId, id, fieldsArr])

	const handlerOnClick = () => {
		if (id === endId) { 
			setPicture(ok)
			dispatch(setFieldsDisabled(true));
			dispatch(setIsWin(true));
		} else { 
			setPicture(over) 
			dispatch(setFieldsDisabled(true));
			dispatch(setIsWin(false));
		}
	}

	return (
		<button
			disabled={fieldsDisabled}
			className={style.field}
			onClick={handlerOnClick}
			style={{
				width: (maxWidthBoard / axisX) - fieldBorder * 2,
				height: (maxWidthBoard / axisX) - fieldBorder * 2,
				margin: fieldBorder
			}}
		>
			{
				picture && <img src={picture} alt='Start, end or fail' />
			}

		</button >
	)
}