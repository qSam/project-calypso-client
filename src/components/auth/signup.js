import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {

  handleFormSubmit(formProps){
    //Call Signup Action Creator
    //this.props.signupUser(formProps);
    console.log(this.props);
  }

  render() {
    const {handleSubmit, fields:{user, password, passwordConfirm}} = this.props;

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset className="form-group">
        <label>User Name</label>
        <input className="form-control" {...user} />
      </fieldset>

      <fieldset className="form-group">
        <label>Password</label>
        <input className="form-control" {...password} type="password" />
      </fieldset>

      <fieldset className="form-group">
        <label>Confirm Password</label>
        <input className="form-control" {...passwordConfirm} type="password" />
      </fieldset>


        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>

    );
  }
}

function validate(formProps){
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {};
}

export default reduxForm({
  form: 'signup',
  fields: ['user', 'password', 'passwordConfirm' ],
  validate:validate
}, mapStateToProps, actions)(Signup);
