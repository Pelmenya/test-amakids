import cn from 'classnames';
import style from './step-arrow.module.css';
import arrow from '../../images/up-arrow.svg';
import { fieldBorder } from '../../utils/setup-game';
import { TArrow } from '../../utils/types/arrow';

export interface IStepArrowProps {
	type: TArrow;
}

const getClassByType = (type: TArrow) => {
	switch (type) {
		case 'up':
			return '';
		case 'down':
			return style.container_down;
		case 'right':
			return style.container_right;
		case 'left':
			return style.container_left;
	}
}

export const StepArrow = ({ type }: IStepArrowProps) => {

	return (
		<button
			className={
				cn(
					style.container,
					getClassByType(type))
			}
			style={{ margin: fieldBorder }}>
			<img src={arrow} alt="Стрелка" />
		</button>)

}