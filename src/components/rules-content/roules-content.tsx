import { useAppSelector } from "../../hooks/use-app-selector";
import { getRulesState } from "../../services/redux/selectors/rules";
import maze from '../../images/maze.png';

import style from './roules-content.module.css';
import { Flex } from "../flex/flex";
import { useAppDispatch } from "../../hooks/use-app-dispatch";
import { setNeverOpenRulesModal, setOpenRulesModal } from "../../services/redux/slices/rules/rules";
import { Button } from "../button/button";
import { useState } from "react";

export const RulesContent = () => {
	const [isNeverOpen, setIsNeverOpen] = useState(false);

	const dispatch = useAppDispatch();
	const { level, speed, stepCount } = useAppSelector(getRulesState);

	return (
		<div>
			<p className='text text_type_main-medium text_color_interface mt-8'>Двигайся в лабиринте по стрелкам</p>
			<Flex className={style.wrapper} gap={40}>
				<Flex flexDirection='column'>
					<p className='text text_type_main-small mt-10'>Уровень сложности: <span className='text text_type_digits-default'>{level}</span></p>
					<p className='text text_type_main-small mt-5'>Скорость: <span className='text text_type_digits-default'>{speed}</span></p>
					<p className='text text_type_main-small mt-5 mb-10'>Кол-во ходов: <span className='text text_type_digits-default'>{stepCount}</span></p>
				</Flex>
				<img className={style.maze} src={maze} alt='Лабиринт' />
			</Flex>
			<Flex className={style.wrapper} gap={20}>
				<input type='checkbox' onChange={e => {
					setIsNeverOpen(e.target.checked)
				}} />
				<p className='text text_type_main-small text_color_inactive'>Больше не показывать</p>
			</Flex>
			<Flex className={style.button}>
				<div />
				<Button
				onClick={() => {
					dispatch(setNeverOpenRulesModal(isNeverOpen));
					dispatch(setOpenRulesModal(false));
				}}>
					<span>Понятно</span>
				</Button>
			</Flex>
		</div>
	)
}