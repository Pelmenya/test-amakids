import cn from 'classnames';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { MazeBoard } from '../../components/maze-board/maze-board';
import { Modal } from '../../components/modal/modal';
import { RulesContent } from '../../components/rules-content/roules-content';
import { useAppSelector } from '../../hooks/use-app-selector';
import { setOpenRulesModal } from '../../services/redux/slices/rules/rules';
import { getRulesState } from '../../services/redux/selectors/rules/rules';

export const GameMaze= () => {  
  const {
    isOpen: isOpenRules,
    isNeverOpen,
  } = useAppSelector(getRulesState);

  const dispatch = useAppDispatch();

  const handlerOnCloseRulesModal = () => {
    dispatch(setOpenRulesModal(false));
  };

  return (
    <main className='center-container'>
      <MazeBoard />
      {isOpenRules && !isNeverOpen && (
        <Modal title='Вот, что тебя ждет в игре:' handlerOnClose={handlerOnCloseRulesModal}>
          <RulesContent />
        </Modal>
      )}
    </main>
  );
};
