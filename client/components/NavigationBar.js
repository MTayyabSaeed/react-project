import React from 'react';
import { Link } from 'react-router-dom';
//    original code of navbar ---> <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

export default () => {
  return (
    <div>
      <nav className="navbar navbar-toggleable navbar-inverse">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" >Red Dice</Link>
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#mainNavBar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="mainNavBar">
          <ul className="nav navbar-nav navbar-left ">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right ">
            <li className="nav-item active">
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
