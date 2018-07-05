import React from 'react';



function Tam() {
  if (props.living === false) {
    return (
      <div>
        <h3>{props.name}</h3>
        <h4>Dead</h4>
        <hr/>
      </div>;
    )
  } else {
    return (
      <div>
        <h3>{props.name}</h3>
        <h4>{props.age}</h4>
        <hr/>
      </div>;
    }

  }
}
export default Tam;
