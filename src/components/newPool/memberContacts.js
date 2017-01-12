import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import _ from 'lodash';


class MemberContacts extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    let contactsObject = [];
    _.times(this.props.totalMembers, (i) => {
       let keyString="";
       keyString="input_".concat(i);
       contactsObject.push({"Email":event.target[keyString].value});
    })
    this.props.addPoolContacts(contactsObject);
    browserHistory.push('/reviewnewpool');
    event.preventDefault();
  }

  renderInputs(){
      return(
        <div>
        { _.times(this.props.totalMembers, (i) => {
           let keyString="";
           keyString="input_".concat(i);
           return (
             <div className="input-group" key={keyString} >
             <input type="text" className="form-control" name={keyString} placeholder="Email" />
             </div>
        );
      })}
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

  render(){

    return (
      <div className="text-left">
        <form onSubmit={this.handleSubmit}>
        Please enter contacts for {this.props.totalMembers} pool members
        {this.renderInputs()}
        <input className="btn btn-primary" type="submit" value="Next" />
        </form>
        {this.renderMemberContacts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
          totalMembers: state.pool.totalMembers,
          memberContacts: state.pool.memberContacts
          };
}

export default MemberContacts = connect(mapStateToProps, actions)(MemberContacts);
