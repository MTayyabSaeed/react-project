import React from 'react';
import SignupForm from './SignupForm';

class SignUpPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4 bg-success">
            <SignupForm />
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
