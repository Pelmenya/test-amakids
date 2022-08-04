
import { useAppSelector } from '../../../../hooks/use-app-selector';
import { getMazeBoardState } from '../../../../services/redux/selectors/maze-board/maze.board';
import { fieldBorder, maxWidthBoard } from '../../../../utils/setup-game';
import style from './field.module.css';

import over from '../../../../images/game-over.svg';
import ok from '../../../../images/ok.svg';
import start from '../../../../images/start.svg';
import { useEffect, useState } from 'react';
import { Nullable } from '../../../../utils/types/nullable';
export interface IField {
	id: string;
}

export const Field = ({ id }: IField) => {
	const { axisX, startId, endId } = useAppSelector(getMazeBoardState);
	const [picture, setPicture] = useState<Nullable<string>>(null)

	useEffect(() => {
		if (startId === id) {
			setPicture(start)
		}
	}, [startId, id])

	const handlerOnClick = () => {
		if (id === endId) { 
			setPicture(ok) 
		} else { 
			setPicture(over) 
		}
	}

	return (
		<button
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