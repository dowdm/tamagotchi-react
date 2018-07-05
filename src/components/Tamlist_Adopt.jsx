import React from 'react';
import PropTypes from 'prop-types';

function Adopt(props){
  let _name = null;

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
