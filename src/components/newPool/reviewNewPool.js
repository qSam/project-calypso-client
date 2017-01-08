import React, {Component} from 'react';
import {connect} from 'react-redux';


class ReviewNewPool extends Component {


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

    return(
      <div className="panel panel-default text-left">
        {this.renderPoolDetails()}
        {this.renderTotalMembers()}
        {this.renderMemberContacts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalMembers: state.pool.totalMembers,
    memberContacts: state.pool.memberContacts,
    poolDetails: state.pool.newPoolDetails
  };
}


export default ReviewNewPool = connect (mapStateToProps, null)(ReviewNewPool);
