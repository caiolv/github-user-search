import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import "./styles/main.scss";

import Home from './pages/Home';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
