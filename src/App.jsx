import React from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Anime from './pages/Anime';
import Game from './pages/Game';
import Movie from './pages/Movie';
import Sport from './pages/Sport';
import CurrencyConverter from './components/CurrencyConverter';
import Popular from './pages/Popular';
import './App.css';

function App() {
  
  let newsApi = '1c97eb92463b4786bc8c16e9d1598f7f'
  let currencyApi='4JbzDjxRrl4AfOvViI5MRMUL02ux6Xzh'

  return (
    <>
      <div className="App">
        <Header />
        <div className="left-side"></div>
        <div className="right-side">
          <CurrencyConverter currencyApi={currencyApi}/>
        </div>
      </div>
      <Routes>
        <Route path="/popular" element={<Popular newsApi={newsApi}/>} />
        <Route path="/game" element={<Game newsApi={newsApi}/>} />
        <Route path="/anime" element={<Anime newsApi={newsApi}/>} />
        <Route path="/movie" element={<Movie newsApi={newsApi}/>} />
        <Route path="/sport" element={<Sport newsApi={newsApi}/>} />
      </Routes>
    </>
  );
}

export default App;
