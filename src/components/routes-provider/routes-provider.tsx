import { Routes, Route } from 'react-router-dom';
import { GameMaze } from '../../pages/game-maze/game-maze';
import { NotFoundPage } from '../../pages/not-found-page/not-found';
import { ProtectedRoute } from './components/protected-route';

export const RoutesProvider = () => {
  return (
    <Routes>
      <Route path='/' element={<ProtectedRoute redirect='/login' element={<GameMaze />} />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>)
};
