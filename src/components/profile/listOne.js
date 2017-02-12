import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Link} from 'react-router';


class ListOne extends Component {



  componentWillMount(){

    let poolObject = {
      "username":this.props.userID,
      "policyID":this.props.currentPoolID
    };
    this.props.getSinglePool(poolObject);
  }


  render(){


    if(this.props.userSignedIn) {
      return(
        <div>
          Policy Number: {this.props.currentPool.policyNumber}<br />
          Total Amount: {this.props.currentPool.totalAmount}<br />
          Policy Length: {this.props.currentPool.policyLength}<br />
          <Link className="btn btn-primary" to="/home">Back</Link>
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
    userID: state.user.userID,
    currentPoolID: state.user.currentPoolID,
    currentPool: state.user.currentPool
  };
}

export default ListOne = connect(mapStateToProps, actions)(ListOne);
