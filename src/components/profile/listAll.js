import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class ListAll extends Component {

  //First Time Render
  componentWillMount() {
    console.log("Signed In value is ", this.props.userSignedIn);
    console.log("User Id is ", this.props.userID);
    this.props.getAllUserPools("cr9");
  }

  renderUserPools(){
    return(
      <div>
        {this.props.userPools.map( (pool) => {
          return(
            <div key={pool._id} className="panel panel-default">
              Policy Name: {pool.policyNumber}<br />
              Total Amount: {pool.totalAmount}<br />
              Total Length: {pool.policyLength}<br />
            </div>
          );
        }
        )}
      </div>
    );
  }

  render(){
    return (
      <div>
        Your current saving pools are:
        {this.renderUserPools()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    userPools : state.user.userPools,
    userSignedIn: state.user.userSignedIn,
    userID: state.user.userID
  };
}

export default ListAll = connect(mapStateToProps, actions)(ListAll);
