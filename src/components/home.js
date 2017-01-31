import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import ListAll from './profile/listAll';
import {connect} from 'react-redux';

class Home extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    browserHistory.push('/savingpool');
    event.preventDefault();
  }

  render(){

    if(this.props.userSignedIn) {
      return (
        <div className="text-left">
          <form onSubmit={this.handleSubmit}>
            <input className="btn btn-success" type="submit" value="Create new savings pool" />
          </form>

          <ListAll />
        </div>
      );
    } else {
      return (
        <div>
          Please Sign In First!
        </div>
      );
    }

  }
}

function mapStateToProps(state) {
  return {
    userSignedIn: state.user.userSignedIn
  };
}

export default Home = connect(mapStateToProps, null)(Home);
