import React from 'react';
import Age from './Stats_Age';
import Food from './Stats_Food';
import Sleep from './Stats_Sleep';
import Amusement from './Stats_Amusement';
import Hygiene from './Stats_Hygiene';

function Stats() {
  return(
    <div>
      <Age/>
      <div>
        <Food/>
        <Sleep/>
        <Amusement/>
        <Hygiene/>
      </div>
    </div>
  );
}


export default Stats;
