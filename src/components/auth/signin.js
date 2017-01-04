import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {

  handleFormSubmit(formProps) {
    //Call Signin Action Creator
  }

  render() {
    const {handleSubmit, fields:{user, password}} = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

      <button action="submit" className="btn btn-primary">Sign In!</button>
    </form>
  );
  }
}

function validate(formProps){
  const errors = {};

  return errors;
}

function mapStateToProps(state){
  return {};
}

export default reduxForm({
  form: 'signin',
  fields: ['user', 'password'],
  validate: validate
}, mapStateToProps, actions)(Signin);
