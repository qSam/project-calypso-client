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

    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <fieldset>
          <label htmlFor="username">User</label>
          <Field name="username" className="form-control" component="input" type="text"/>
      </fieldset>

      <fieldset>
                <label htmlFor="password">Password</label>
                <Field name="password" className="form-control" component="input" type="password"/>
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
