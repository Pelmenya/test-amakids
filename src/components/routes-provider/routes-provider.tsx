import { Routes, Route } from 'react-router-dom';
import { GameMaze } from '../../pages/game-maze-page/game-maze-page';
import { NotFoundPage } from '../../pages/not-found-page/not-found';

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<GameMaze />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>)
};
