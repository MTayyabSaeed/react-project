//import packages
import React from 'react';

//import libraries
import map from 'lodash/map';

//import files
import timeszones from '../../data/timeszones.js';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      timezone: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  onSubmit(event){
    event.preventDefault();
    // TODO: why is I dont get the output on console in the browser
    console.log(this.state.name);
    console.log('The Sign Up button was clicked.');
  }

  render() {
    const options = map(timeszones, (val, key) =>
      <option key = {val} value = {val}> {key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <br></br>
        <h3 className="text-center">Welcome! Please Sign Up</h3>
        <br></br>
        <div className="Absolute-Center is-Responsive">

          {/*Logo*/}
          <div id="logo-container"></div>
          <div className="col-sm-12 col-md-10 col-md-offset-1">

            {/*Form*/}
            <div className="form-group">

              {/*Username Field*/}
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.onChange}
                  placeholder="Username"/>
              </div>

              {/*Email Field*/}
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="Email"/>
              </div>

              {/*Password Field*/}
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="Password"/>
              </div>

              {/*Confirm Password Field*/}
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input
                  className="form-control"
                  type="password"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.onChange}
                  placeholder="Confirm Password"/>
              </div>

              {/*Select Options Field*/}
              <div className="form-group input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-time"></i></span>
                <select
                  className="form-control"
                  name="timezone"
                  value={this.state.timezone}
                  onChange={this.onChange}
                  >
                  <option value="" disabled> Choose your time</option>
                  {options}
                </select>
              </div>

              {/*Signup Submit Button*/}
              <div className="form-group">
                <button type="button" className="btn btn-def btn-block">Sign Up</button>
              </div>
              <br></br>
            </div>
          </div>
          </div>
        </form>
    );
  }
}

export default SignupForm;
