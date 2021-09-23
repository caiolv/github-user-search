import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import "./styles/main.scss";

import Home from './pages/Home';
import User from './pages/User';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/:user" exact component={User} />
    </BrowserRouter>
  );
}

export default App;
