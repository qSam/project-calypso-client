import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import '../../App.css';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <fieldset>
  <input {...input} placeholder={label} type={type} className="form-control"/>
  {touched && (error && <span className="Error">{error}</span>)}
  </fieldset>
);


class Signup extends Component {

  handleFormSubmit(values){
    //Call Signup Action Creator
    this.props.signupUser(values);
  }

  renderAlert() {
    if(this.props.errorMessage) {
      return (
          <div className="alert alert-danger">
            {this.props.errorMessage}
          </div>
      );
    }
  }

  render() {
    const {handleSubmit} = this.props;


    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="panel panel-default form-border">

          <Field name="username" component={renderField} type="text"
          label="Username"  />

          <Field name="password" component={renderField} type="password"
          label="Password"  />

          <Field name="passwordConfirm" component={renderField} type="password"
          label="Confirm Password" />

        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
        <br />
        <span> <Link to="/signin">Already have an account</Link></span>
      </form>

    );
  }
}

function validate(formProps){
  const errors = {};

  if(!formProps.username) {
    errors.username = 'Please enter username';
  }

  if(!formProps.password) {
    errors.password = 'Please enter password';
  }

  if(!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter confirm password';
  }

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return {errorMessage: state.auth.error};
}

Signup = reduxForm({
    form: 'signup',
    validate:validate
})(Signup);

export default Signup = connect(mapStateToProps, actions)(Signup);
