import React from 'react';
import Age from './Stats_Age';
import Food from './Stats_Food';
import Sleep from './Stats_Sleep';
import Amusement from './Stats_Amusement';
import Hygiene from './Stats_Hygiene';
import PropTypes from 'prop-types';

function Stats(props) {
  return(
    <div className='stats'>
      <h1>STATUS:</h1>
      <hr/>
      <Age
        ageMeterValue={props.ageMeterValue}
      />
      <br/>
      <div className='status-bars'>
        <Food
          foodMeterValue={props.foodMeterValue} />
        <Sleep
          sleepMeterValue={props.sleepMeterValue}
        />
        <Amusement
          amusementMeterValue={props.amusementMeterValue}
        />
        <Hygiene
          hygieneMeterValue={props.hygieneMeterValue}
        />
      </div>
    </div>
  );
}

Stats.propTypes = {
  ageMeterValue: PropTypes.number,
  foodMeterValue: PropTypes.number,
  sleepMeterValue: PropTypes.number,
  amusementMeterValue: PropTypes.number,
  hygieneMeterValue: PropTypes.number,
};

export default Stats;
