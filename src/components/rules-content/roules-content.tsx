import cn from 'classnames';
import { useAppSelector } from "../../hooks/use-app-selector";
import maze from '../../images/maze.png';

import style from './roules-content.module.css';
import { Flex } from "../flex/flex";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { setNeverOpenRulesModal, setOpenRulesModal } from "../../services/redux/slices/rules/rules";
import { Button } from "../button/button";
import { useState } from "react";
import { getMazeBoardState } from '../../services/redux/selectors/maze-board/maze.board';
import { handlerMazeData } from '../../utils/functions/handlers/handler-maze-data';

export const RulesContent = () => {
	const [isNeverOpen, setIsNeverOpen] = useState(false);

	const dispatch = useAppDispatch();
	
	const {
		level,
		speed,
		stepsCount,
		axisX,
		axisY,
	} = useAppSelector(getMazeBoardState);


	return (
		<div>
			<p className='text text_type_main-medium text_color_interface mt-8'>Двигайся в лабиринте по стрелкам</p>
			<Flex className={style.wrapper} gap={35}>
				<Flex flexDirection='column'>
					<p className='text text_type_main-small mt-10'>Уровень сложности: <span className='text text_type_digits-default'>{level}</span></p>
					<p className='text text_type_main-small mt-5'>Скорость: <span className='text text_type_digits-default'>{speed}</span></p>
					<p className='text text_type_main-small mt-5 mb-10'>Кол-во ходов: <span className='text text_type_digits-default'>{stepsCount}</span></p>
				</Flex>
				<img className={style.maze} src={maze} alt='Лабиринт' />
			</Flex>
			<Flex className={cn(style.wrapper, style.wrapper_cursor)}>
				<input type='checkbox' id='neverOpen' name='neverOpen' onChange={e => {
					setIsNeverOpen(e.target.checked)
				}} />
				<label htmlFor='neverOpen' className={cn('text text_type_main-small text_color_inactive pl-4', style.label)}>Больше не показывать </label>
			</Flex>
			<Flex className={style.button}>
				<div />
				<Button
					onClick={() => {
						dispatch(setNeverOpenRulesModal(isNeverOpen));
						dispatch(setOpenRulesModal(false));
						handlerMazeData(axisX, axisY, stepsCount, dispatch);
					}}>
					<span>Понятно</span>
				</Button>
			</Flex>
		</div>
	)
}