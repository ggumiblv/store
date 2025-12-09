import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { useNavigate, Link } from 'react-router-dom';
import UserStore from '../store/UserStore';

import { observer } from 'mobx-react-lite';

const Navbar = observer(() => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={SHOP_ROUTE} className="navbar-brand">
          big store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-md-end" id="navbarNavDropdown">
          {UserStore.isAuth ? (
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={ADMIN_ROUTE}>
                  Админ панель
                </a>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={() => UserStore.setIsAuth(false)}>
                  Выйти
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <button
                  onClick={() => {
                    UserStore.setIsAuth(true);
                    navigate(LOGIN_ROUTE);
                  }}
                  className="nav-link"
                >
                  Авторизация
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
