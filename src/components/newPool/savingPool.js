import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';


class SavingPool extends Component {

  handleFormSubmit(values) {
    //Call an action creator here
    this.props.addPoolDetails(values);
    browserHistory.push('/reviewnewpool');
  }

  render() {
    const {handleSubmit} = this.props;

    return (
      <div className="text-left">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >

        <fieldset className="form-group">
          <label htmlFor="policyName">Policy Name</label>
          <Field name="policyName" className="form-control" component="input" type="text" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="totalAmount">Total Amount $</label>
          <Field name="totalAmount" className="form-control" component="input" type="text" />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="policyLength">Policy Length</label>
          <Field name="policyLength" className="form-control" component="select">
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
          </Field>
        </fieldset>

        <button action="submit" className="btn btn-primary">Next</button>

        </form>
      </div>
    )
  }
}

function validate(formProps) {
  const errors = {};

  return errors;
}

function mapStateToProps(state){
  return {};
}

SavingPool = reduxForm({
  form:'savingpool',
  validate:validate
})(SavingPool);

export default SavingPool = connect(mapStateToProps, actions)(SavingPool);
