import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

export class Header extends Component {

  renderLinks(){

    if (this.props.userSignedIn) {
      return [
        <li className="nav-item" key={1} >
          <Link className="nav-link" to="/home">Home</Link>
        </li>,
        <li className="nav-item" key={2} >
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={3} >
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li className="nav-item" key={4} >
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render(){
    return (
      <nav className="navbar navbar-inverse bg-primary">
        <ul className="nav navbar-nav pull-right">
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }

}


function mapStateToProps(state){
  return {
    userSignedIn : state.user.userSignedIn
  };
}

export default connect(mapStateToProps)(Header);
