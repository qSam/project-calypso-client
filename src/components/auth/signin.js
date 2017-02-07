import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import '../../App.css';


class Signin extends Component {

  handleFormSubmit(values) {
    //Call Signin Action Creator
    this.props.signinUser(values);

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

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <fieldset>
      <input {...input} placeholder={label} type={type} className="form-control"/>
      {touched && (error && <span className="Error">{error}</span>)}
      </fieldset>
    );

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} className="panel panel-default form-border">

        <Field name="username" component={renderField} type="text"
        label="Username"/>

        <Field name="password" component={renderField} type="password"
        label="Password" />

      {this.renderAlert()}
      <button action="submit" className="btn btn-primary">Sign In!</button>
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

  return errors;
}

function mapStateToProps(state){
  return {errorMessage:state.auth.error};
}

Signin = reduxForm({
  form:'signin',
  validate:validate
})(Signin);

export default Signin = connect(mapStateToProps, actions)(Signin);
