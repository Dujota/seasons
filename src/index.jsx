import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  // Belongs to the JS language itself to initialize a class
  constructor(props) {
    super(props); // a reference to the parent's constructor function so that it runs
  }

  // React says we have to define Render!!!!
  render() {
    this.state = { position: null };

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState(position),
      error => console.log(error)
    );

    return <div>Latitude:</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
