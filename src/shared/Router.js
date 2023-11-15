import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import FakeData from '../FakeData.json';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Header from 'components/UI/Header';
import { FanLetterContext } from 'context/FanLetterContext';
import { useSelector } from 'react-redux';

const Router = () => {
  const [fanLetters, setFanLetters] = useState(FakeData);
  const [selectedMember, setSelectedMember] = useState('전체');

  const data = useSelector((state) => {
    return state;
  });

  console.log(data);

  return (
    <BrowserRouter>
      <Header />
      <FanLetterContext.Provider
        value={{ fanLetters, setFanLetters, selectedMember, setSelectedMember }}
      >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route />
        </Routes>
      </FanLetterContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
