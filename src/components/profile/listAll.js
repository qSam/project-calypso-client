import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class ListAll extends Component {


  //First Time Render
  componentWillMount() {
    if(this.props.userSignedIn) {
    this.props.getAllUserPools(this.props.userID);
  }
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

    if (this.props.userSignedIn) {
      if(this.props.userPools.length > 0) {
        return (
        <div>
          Your current saving pools are:
          {this.renderUserPools()}
        </div>
      );
    } else {
      return(
        <div>
          You currently have not created any savings pools
        </div>
      );
    }

    }
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
