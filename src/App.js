import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import "./styles/main.scss";

import Home from './pages/Home';
import User from './pages/User';
import Repos from './pages/Repos';
import Search from './pages/Search';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/:user" exact component={User} />
        <Route path="/:user/repos" component={Repos} />
        <Route path="/:user/starred" component={Repos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
