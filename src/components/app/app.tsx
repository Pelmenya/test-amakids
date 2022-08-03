import { RoutesProvider } from '../routes-provider/routes-provider';

import style from './app.module.css';

export const App = () => {
  return (
    <div className={style.app}>
      <RoutesProvider />
    </div>
  );
};
