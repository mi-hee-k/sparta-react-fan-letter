import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Header from 'components/UI/Header';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='*' element={<Navigate replace to={'/'} />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
