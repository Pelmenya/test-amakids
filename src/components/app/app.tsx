import { GameMaze } from '../../pages/game-maze-page/game-maze-page';

import style from './app.module.css';

export const App = () => {
  return (
    <div className={style.app}>
      <GameMaze />
    </div>
  );
};
