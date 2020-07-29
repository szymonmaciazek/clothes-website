import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import './App.css';
import {Home} from "./components/Home"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Logout} from "./components/Logout";
import {HandoverHeader} from "./components/Handover";


function App() {

  return (
      <HashRouter>
        <>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <Route path='/logout' component={Logout} />
          <Route path='/handover' component={HandoverHeader} />
        </>
      </HashRouter>
  );
}

export default App;