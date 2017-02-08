import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';


class ListOne extends Component {

  componentWillMount(){

    let poolObject = {
      "username":"cr1",
      "policyID":"58964972689c440012d623e7"
    };

    this.props.getSinglePool(poolObject);
  }

  render(){

    if(this.props.userSignedIn) {
      return(
        <div>
          Policy Number: {this.props.currentPool.policyNumber}<br />
          Total Amount: {this.props.currentPool.totalAmount}<br />
          Policy Length: {this.props.currentPool.policyLength}
        </div>
      );
    } else {
        return(
          <div>
            Please Sign In First
          </div>
        );
      }
    }
  }

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.userSignedIn,
    currentPool: state.user.currentPool
  };
}

export default ListOne = connect(mapStateToProps, actions)(ListOne);
