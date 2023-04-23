import React from 'react';
import SoilHealthCard from './SoilHealthCard';
import Button from 'react-bootstrap/Button';

function Main() {
  return (
    <div className='main-content'>
      <SoilHealthCard />
      <Button variant='primary'>Predict Yield</Button>
    </div>
  );
}

export default Main;
