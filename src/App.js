import React, {useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import Event from './Pages/Event';
import Login from './Pages/Login';

import { Context } from './LoginP';
import { Button } from './Pages/Component/LoginButton/LoginButton';

export default function App() {
  const loginContext = useContext(Context);

  return (
    <Router>
      <h1>Viðburðasíðan</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:id" element={<Event />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {loginContext.login === false && <div className="link">
        <Link to='/login' className="link__link">Innskráning </Link>
      </div>}
      {loginContext.login === true && <div className="link">
        Skráður inn sem test
      </div>}
      {loginContext.login === true && <Button onClick={loginContext.toggleLogin}>Útskrá</Button>}
      {loginContext.login === false && <Button onClick={loginContext.toggleLogin}>Nýskráning</Button>}
    </Router>
  );
}

