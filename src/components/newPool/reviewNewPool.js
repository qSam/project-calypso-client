import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {browserHistory} from 'react-router';


class ReviewNewPool extends Component {

  handleFormSubmit(values) {
    //Call Submit Pool action creator
    browserHistory.push('/home');
    event.preventDefault();
  }


  renderTotalMembers() {
    return (
      <div>
        Total number of members : {this.props.totalMembers}
      </div>
    );
  }

  renderMemberContacts(){
    return(
      <div>
        {this.props.memberContacts.map( (contact) => {
          return (
            <div key={contact.Email}>
                Member contact is {contact.Email}
            </div>
          );
        }
        )}
      </div>
    );
  }

  renderPoolDetails() {
    return(
      <div>
        Pool Name : {this.props.poolDetails.policyName} <br />
        Total Amount : {this.props.poolDetails.totalAmount} <br />
        Pool Length : {this.props.poolDetails.policyLength} month(s)
      </div>
    );
  }

  render(){

    const {handleSubmit} = this.props;

    return(

      <div className="panel panel-default text-left">
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >

        {this.renderPoolDetails()}
        {this.renderTotalMembers()}
        {this.renderMemberContacts()}


      <input className="btn btn-primary" type="submit" value="Submit" />

      </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {
    totalMembers: state.pool.totalMembers,
    memberContacts: state.pool.memberContacts,
    poolDetails: state.pool.newPoolDetails
  };
}

ReviewNewPool = reduxForm({
      form: 'reviewpool',
      validate:validate
})(ReviewNewPool);


export default ReviewNewPool = connect (mapStateToProps, actions)(ReviewNewPool);
