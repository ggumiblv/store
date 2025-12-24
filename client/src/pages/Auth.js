import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Link, useNavigate } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import UserStore from '../store/UserStore';

const Auth = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const isLogin = pathname === LOGIN_ROUTE;

  const click = async (e) => {
    e.preventDefault();
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      UserStore.setUser(data);
      UserStore.setIsAuth(true);
      navigate(SHOP_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
        <button onClick={(e) => click(e)} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default observer(Auth);
