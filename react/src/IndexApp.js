import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './untitled.css'
import Ind from "./components/Index";


import UserRegistration from "./components/UserRegistration";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Index() {
  return (
    // <div className="Index">
    //   <Ind />
    // </div>

    <Router>
        <div>
          <Route path="/" exact strict render={
            () => {
              return <Login />;
            }
          }/>
          <Route path="/registration" exact strict render={
            () => {
              return <UserRegistration />;
            }
          }/>
        </div>
    </Router>
  );
}

export default Index;
