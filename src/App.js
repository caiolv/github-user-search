import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import "./styles/main.scss";

import Home from './pages/Home';
import User from './pages/User';
import Repos from './pages/Repos';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/:user" exact component={User} />
      <Route path="/:user/repos" exact component={Repos} />
      <Route path="/:user/starred" exact component={Repos} />
    </BrowserRouter>
  );
}

export default App;
