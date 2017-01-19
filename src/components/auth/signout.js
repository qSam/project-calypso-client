import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signout extends Component {

  componentWillMount() {
    this.props.signoutUser();
  }

  render(){

    return(
      <div>
        Thank you for visiting Project Calypso
      </div>
    );
  }
}

export default Signout = connect(null, actions)(Signout);
