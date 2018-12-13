import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  // Belongs to the JS language itself to initialize a class
  constructor(props) {
    super(props); // a reference to the parent's constructor function so that it runs
    this.state = { lat: null, errorMessage: '' }; // this is the only time we directly mutate the state instead of setState

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // React says we have to define Render!!!!
  render() {
    const { lat, errorMessage } = this.state;

    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat) {
      return <div> Latitude: {lat} </div>;
    }

    return <div> Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
