import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
  const isAuth = false;
  return (
    <div>
      <Routes>
        {isAuth === true &&
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
