import { RoutesProvider } from '../routes-provider/routes-provider';
import { Modal } from '../modal/modal';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getRulesState } from '../../services/redux/selectors/rules';
import { useAppDispatch } from '../../hooks/use-app-dispatch';

import style from './app.module.css';
import { setOpenRulesModal } from '../../services/redux/slices/rules/rules';
import { RulesContent } from '../rules-content/roules-content';

export const App = () => {
  const {
    isOpen: isOpenRules,
    isNeverOpen,
  } = useAppSelector(getRulesState);

  const dispatch = useAppDispatch();

  const handlerOnCloseRulesModal = () => {
    dispatch(setOpenRulesModal(false));
  };

  return (
    <div className={style.app}>
      <RoutesProvider />
      {isOpenRules && !isNeverOpen && (
        <Modal title='Вот, что тебя ждет в игре:' handlerOnClose={handlerOnCloseRulesModal}>
          <RulesContent />
        </Modal>
      )}
    </div>
  );
};
