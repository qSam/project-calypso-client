import React, {Component} from 'react';
import ListAll from './profile/listAll';

class Home extends Component {

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
  }

  render(){
    return (
      <div className="text-left">
        <br />
        <form onSubmit={this.handleSubmit}>
          <input className="btn btn-success" type="submit" value="Create new savings pool" />
        </form>

        <ListAll />
      </div>
    );
  }
}

export default Home;
