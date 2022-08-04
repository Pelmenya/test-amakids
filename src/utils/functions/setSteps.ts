import { TArrow } from "../types/arrow"

export interface IBoardField {
	x: number;
	y: number;
	stepsTo: TArrow[];
}


const getRandomStep = (stepsTo: TArrow[]) => {
	return stepsTo[Math.floor(Math.random() * stepsTo.length)]
}

const getRandomStart = (board: IBoardField[]) => {
	const num = Math.floor(Math.random() * board.length);
	return num;
}

export const setSteps = (x: number, y: number, stepsCount: number) => {
	const stepsArr: TArrow[] = [];

	let board: IBoardField[] = [];
	// углы
	const rd: TArrow[] = ['right', 'down'];
	const ld: TArrow[] = ['left', 'down'];
	const ru: TArrow[] = ['right', 'up'];
	const lu: TArrow[] = ['left', 'up'];
	// стороны
	const lrd: TArrow[] = ['left', 'right', 'down'];
	const lru: TArrow[] = ['left', 'right', 'up'];
	const lud: TArrow[] = ['left', 'up', 'down'];
	const rud: TArrow[] = ['right', 'up', 'down'];
	// остальное
	const udrl: TArrow[] = ['right', 'left', 'up', 'down'];


	for (let i = 0; i < x; i++) {
		for (let j = 0; j < y; j++) {
			// граничные условия
			if (i === 0 && j === 0) board.push({ x: i, y: j, stepsTo: [...rd] })
			else if (i === x - 1 && j === 0) board.push({ x: i, y: j, stepsTo: [...ld] })
			else if (i === 0 && j === y - 1) board.push({ x: i, y: j, stepsTo: [...ru] })
			else if (i === x - 1 && j === y - 1) board.push({ x: i, y: j, stepsTo: [...lu] })
			else if (i === 0 && (j !== 0 || j !== y - 1)) board.push({ x: i, y: j, stepsTo: [...rud] })
			else if (i === x - 1 && (j !== 0 || j !== y - 1)) board.push({ x: i, y: j, stepsTo: [...lud] })
			else if (j === 0 && (i !== 0 || i !== x - 1)) board.push({ x: i, y: j, stepsTo: [...lrd] })
			else if (j === y - 1 && (i !== 0 || i !== x - 1)) board.push({ x: i, y: j, stepsTo: [...lru] })
			else board.push({ x: i, y: j, stepsTo: [...udrl] })
		}
	}

	const start = getRandomStart(board);

	let end = start;
	let dX = board[end].x;
	let dY = board[end].y;

	const setBoardXY = (arrow: TArrow) => {
		switch (arrow) {
			case 'down':
				dY++;
				break;
			case 'up':
				dY--;
				break;
			case 'right':
				dX++;
				break;
			case 'left':
				dX--;
				break;
			default: break;
		}
	}

	const second = getRandomStep(board[end]?.stepsTo)
	setBoardXY(second);
	stepsArr.push(second);

	console.log(board)
	console.log(board[start])

	for (let i = 1; i < stepsCount; i++) {
		const xInner = dX;
		const yInner = dY;
		end = board.findIndex(item => item.x === xInner && item.y === yInner)
		const arrow: TArrow = getRandomStep(board[end]?.stepsTo);
		stepsArr.push(arrow);
		setBoardXY(arrow);
	}
	end = board.findIndex(item => item.x === dX && item.y === dY)
	console.log(board[end])

	return [...stepsArr];
}




