import React from 'react';
import SoilHealthCard from './SoilHealthCard';
import Result from './Result';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <Router>
      <div className='main-content'>
        <Routes>
          <Route path='/' exact element={<SoilHealthCard />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Main;
