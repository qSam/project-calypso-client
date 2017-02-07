import React, {Component} from 'react';
import * as actions from '../../actions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import _ from 'lodash';
import {Field, reduxForm} from 'redux-form';


class MemberContacts extends Component {

  handleFormSubmit(values){
    let contactsObject = [];
    for (let emailValue of Object.values(values)) {
      contactsObject.push({"Email":emailValue});
    };
    this.props.addPoolContacts(contactsObject);
    browserHistory.push('/reviewnewpool');
    event.preventDefault();
  }

  renderInputs(){

    const required = value => value ? undefined : 'Required';

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <fieldset>
      <label>{label}</label>
      <input {...input} placeholder="Email" type={type} className="form-control"/>
      {touched && (error && <span className="Error">{error}</span>)}
      </fieldset>
    );

      return(
        <div>
        { _.times(this.props.totalMembers, (i) => {
           let keyString="";
           keyString="input_".concat(i);
           return(
             <div key={keyString} >
             <Field name={keyString} component={renderField} type="text"
             placeholder="Email"
             validate={required} />
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

    const {handleSubmit} = this.props;

    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        Please enter contacts for {this.props.totalMembers} pool members
        {this.renderInputs()}
        <input className="btn btn-primary" type="submit" value="Next" />
        </form>
    );
  }
}

function validate(formProps){
  const errors = {};

  return errors;
}

function mapStateToProps(state) {
  return {
          totalMembers: state.pool.totalMembers,
          memberContacts: state.pool.memberContacts
          };
}

MemberContacts = reduxForm({
  form:'membercontacts',
  validate:validate
})(MemberContacts);

export default MemberContacts = connect(mapStateToProps, actions)(MemberContacts);
