import React from 'react';
import Age from './Stats_Age';
import Food from './Stats_Food';
import Sleep from './Stats_Sleep';
import Amusement from './Stats_Amusement';
import Hygiene from './Stats_Hygiene';

function Stats(props) {
  return(
    <div className='stats'>
      <Age/>
      <div className='status-bars'>
        <Food
          foodMeterValue={props.foodMeterValue} />
        <Sleep/>
        <Amusement/>
        <Hygiene/>
      </div>
    </div>
  );
}


export default Stats;
