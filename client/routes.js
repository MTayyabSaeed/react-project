//import packages
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route } from 'react-router-dom';

//import components
import App from "./components/App";
import Greetings from "./components/Greetings";
import SignUpPage from "./components/signup/SignUpPage";

const element = (
  <AppContainer>
    <BrowserRouter>
      <div>
        <Route path="/" component={App}/>
        <Route exact path="/" component={Greetings}/>
        <Route path="/signup" component={SignUpPage}/>
        </div>
      </BrowserRouter>
  </AppContainer>
);

ReactDOM.render(element, document.getElementById("app"));
