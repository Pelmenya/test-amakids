import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { MazeBoard } from '../../components/maze-board/maze-board';
import { Modal } from '../../components/modal/modal';
import { RulesContent } from '../../components/rules-content/roules-content';
import { useAppSelector } from '../../hooks/use-app-selector';
import { setOpenRulesModal } from '../../services/redux/slices/rules/rules';
import { getRulesState } from '../../services/redux/selectors/rules/rules';
import { Flex } from '../../components/flex/flex';

import style from './game-maze-page.module.css';
import { getMazeBoardState } from '../../services/redux/selectors/maze-board/maze.board';
import { handlerMazeData } from '../../utils/functions/handlers/handler-maze-data';

export const GameMaze= () => {  
  const {
    isOpen: isOpenRules,
    isNeverOpen,
  } = useAppSelector(getRulesState);
  
  const {
		stepsCount,
		axisX,
		axisY,
	} = useAppSelector(getMazeBoardState);

  const dispatch = useAppDispatch();

  const handlerOnCloseRulesModal = () => {
    handlerMazeData(axisX, axisY, stepsCount, dispatch);
    dispatch(setOpenRulesModal(false));
  };

  return (
    <main className='center-container'>
      <Flex className={style.container}>
        <MazeBoard />
      </Flex>     
      {isOpenRules && !isNeverOpen && (
        <Modal title='Вот, что тебя ждет в игре:' handlerOnClose={handlerOnCloseRulesModal}>
          <RulesContent />
        </Modal>
      )}
    </main>
  );
};
