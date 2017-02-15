import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {Link} from 'react-router';


class ListOne extends Component {


  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }


  componentWillMount(){

    let poolObject = {
      "username":this.props.userID,
      "policyID":this.props.currentPoolID
    };
    this.props.getSinglePool(poolObject);
  }

  handleDeleteClick(){
    console.log("I am inside delete");
    let deleteObject = {
      "username":this.props.userID,
      "policyID":this.props.currentPoolID
    };
    this.props.deletePool(deleteObject);
  }


  render(){


    if(this.props.userSignedIn && this.props.currentPool.policyMembers) {

      let memberObject = this.props.currentPool.policyMembers;
      return(
        <div>
          Policy Number: {this.props.currentPool.policyNumber}<br />
          Total Amount: {this.props.currentPool.totalAmount}<br />
          Policy Length: {this.props.currentPool.policyLength}<br />
          {memberObject.length > 0 && Object.keys(memberObject).map((key) => {
              return (
                <div key={key}>Member Contact is: {memberObject[key]} </div>
              );
            })}
          {memberObject.length === 0 && <div>No members have been added to this policy</div>}

          <div className="row">
            <div className="col-sm-6">
              <Link className="btn btn-primary" to="/home">Back</Link>
            </div>
            <div className="col-sm-6">
              <button type="button" className="btn btn-danger" onClick={this.handleDeleteClick}>Delete Policy</button>
            </div>
          </div>
        </div>
      );
    } else {
        return(
          <div>
            Please Sign In and Select a Policy to review
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
