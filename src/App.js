import React from 'react';
import Dashboard from './components/layout/Dashboard'
import Lyrics from './components/tracks/Lyrics'
import {Route, BrowserRouter, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/lyrics/:id' component={Lyrics}/>
        </Switch>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
