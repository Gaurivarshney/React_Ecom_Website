import React from 'react'
import Header from './common/Header'
import Home from './Home';
import './App.css'

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './controller/store';


function App() {
  return (
    <Provider store={store}>
    <div>
    <Router>
    <Header/>
      <Switch>
        <Route exact path='/home' Component={Home}/>
      </Switch>
    </Router>
    <Home/>
    
        
    </div>
    </Provider>
  )
}

export default App
