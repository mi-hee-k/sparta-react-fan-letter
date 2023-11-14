import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import FakeData from '../FakeData.json';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Header from 'components/UI/Header';

const Router = () => {
  const [fanLetters, setFanLetters] = useState(FakeData);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Home fanLetters={fanLetters} setFanLetters={setFanLetters} />
          }
        />
        <Route
          path='details/:id'
          element={
            <Details fanLetters={fanLetters} setFanLetters={setFanLetters} />
          }
        />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
