import { authRoutes, publicRoutes } from '../routes';
import { Routes, Route } from 'react-router-dom';

import UserStore from '../store/UserStore';

const AppRouter = () => {
  return (
    <div>
      <Routes>
        {UserStore.isAuth === true &&
          authRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.Component />} />
          ))}

        {publicRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={<route.Component />} />
        ))}
      </Routes>
    </div>
  );
};

export default AppRouter;
