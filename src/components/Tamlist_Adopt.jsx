import React from 'react';
import PropTypes from 'prop-types';

function Adopt(props){
  let _name = null;
  let _foodMeter = 100;
  let _sleepMeter = 100;
  let _amusementMeter = 100;
  let _hygieneMeter = 100;
  let _ageMeter = 0;
  let _playing = false;
  let _washing = false;
  let _eating = false;
  let _sleeping = false;
  let _bloodLust = false;
  let _living = true;

  function handleAdoptSubmission(event) {
    event.preventDefault();
    props.onAdopt({name: _name.value,
      foodMeter: 100,
      sleepMeter: 100,
      amusementMeter: 100,
      hygieneMeter: 100,
      ageMeter: 0,
      playing: false,
      washing: false,
      eating: false,
      sleeping: false,
      bloodLust: false,
      living: true});
    _name.value = '';
  }

  return (
    <div>
      <form onSubmit={handleAdoptSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Pet Name'
          ref={(input) => {_name = input;}}/>
        <button type='submit'>Adopt</button>
      </form>
    </div>
  );
}

Adopt.propTypes = {
  onAdopt: PropTypes.func
};

export default Adopt;
