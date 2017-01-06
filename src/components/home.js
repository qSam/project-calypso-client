import React, {Component} from 'react';


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
        This is the Home Component
        <form onSubmit={this.handleSubmit}>
          <input className="btn btn-primary" type="submit" value="Create new savings pool" />
        </form>
      </div>
    );
  }
}

export default Home;
