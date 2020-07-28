import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import {Home} from "./components/Home"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";


function App() {

  return (
      <HashRouter>
        <>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout} />
        </>
      </HashRouter>
  );
}

export default App;
