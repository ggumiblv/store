import { Link } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { useLocation } from 'react-router-dom';

const Auth = () => {
  const { pathname } = useLocation();

  const isLogin = pathname === LOGIN_ROUTE;
  return (
    <div className="p-5">
      <h3 className="mb-5">{isLogin ? 'Авторизация' : 'Регистрация'}</h3>

      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        {isLogin ? (
          <div className="mb-3">
            Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрируйся!</Link>
          </div>
        ) : (
          <div className="mb-3">
            Есть аккаунт? <Link to={LOGIN_ROUTE}>Войдите!</Link>
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
