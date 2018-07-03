import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Tam from './Tam';

function App(){
  return (
    <div>
      <style jsx global>{`
          .image {
            display: flex;
            justify-content: space-around;
            margin: auto;
            width: 800px;
          }
        `}
      </style>
      <Switch>
        <Route exact path='/' component={Tam} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
