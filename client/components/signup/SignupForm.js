import React from 'react';

class SignupForm extends React.Component {
  render() {
    return (
      <form>
        <br></br>
        <h3 className="text-center">Welcome! Please Sign Up</h3>
        <br></br>
        <div className="Absolute-Center is-Responsive">
          <div id="logo-container"></div>
            <div className="col-sm-12 col-md-10 col-md-offset-1">
              <div className="form-group">
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                  <input className="form-control" type="text" name='username' placeholder="username"/>
                </div>
                <div className="form-group input-group">
                  <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                  <input className="form-control" type="password" name='password' placeholder="password"/>
                </div>
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
