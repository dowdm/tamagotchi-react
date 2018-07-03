import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Tam from './Tam';

function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Tam} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
