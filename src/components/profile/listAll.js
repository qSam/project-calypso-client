import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class ListAll extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //First Time Render
  componentWillMount() {
    if(this.props.userSignedIn) {
    this.props.getAllUserPools(this.props.userID);
  }
  }

  handleClick(poolId) {
    this.props.setCurrentPool(poolId);
  }

  renderUserPools(){
    return(
      <div className="container">
      <div className="row">
        {this.props.userPools.map( (pool) => {
          return(
            <div key={pool._id} className="col-sm-4 panel panel-default">
              <a href="#" onClick={ () => {this.handleClick(pool._id)} }  >
                  Pool Name: {pool.policyNumber}<br />
              </a>
              Total Amount: {pool.totalAmount}<br />
              Total Length: {pool.policyLength} month(s)<br />
            </div>
          );
        }
        )}
      </div>
      </div>
    );
  }

  render(){

    if (this.props.userSignedIn) {
      if(this.props.userPools.length > 0) {
        return (
        <div>
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
