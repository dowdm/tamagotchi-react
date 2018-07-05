import React from 'react';
import PropTypes from 'prop-types';


function Tam(props) {
  if (props.living === false) {
    return (
      <div onClick={() => {props.onTamSelection(props.tamId);}}>
        <h3>{props.name}</h3>
        <h4>Dead</h4>
        <hr/>
      </div>
    );
  } else {
    return (
      <div onClick={() => {props.onTamSelection(props.tamId);}}>
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
        <hr/>
      </div>
    );
  }
}

Tam.propTypes= {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  tamId: PropTypes.string
};

export default Tam;
