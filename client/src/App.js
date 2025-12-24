import { BrowserRouter } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import UserStore from './store/UserStore';
import { check } from './http/userAPI';

import AppRouter from './components/AppRouter';
import Spinner from 'react-bootstrap/Spinner';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          UserStore.setUser(true);
          UserStore.setIsAuth(true);
        })
        .catch((e) => console.log(e))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default observer(App);
