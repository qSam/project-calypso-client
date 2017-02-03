import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';



class Signup extends Component {

  handleFormSubmit(values){
    //Call Signup Action Creator
    console.log("Form values are ", values);
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

    //Validation
    const required = value => value ? undefined : 'Required';

    const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <fieldset>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type} className="form-control"/><br />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
      </fieldset>
    );


    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset>
          <Field name="username" className="form-control" component={renderField} type="text"
          label="Username"
          validate={required}   />
      </fieldset>

      <fieldset>
                <label htmlFor="password">Password</label>
                <Field name="password" className="form-control" component="input"/>


      </fieldset>

      <fieldset>
                <label htmlFor="passwordConfirm">Confim Password</label>
                <Field name="passwordConfirm" className="form-control" component="input" type="password"/>
      </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign Up!</button>
      </form>

    );
  }
}

function validate(formProps){
  const errors = {};

  if(formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Password must match';
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
