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

  componentDidMount() {
    console.log('My component did mount and was rendered to the screen');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('My component just updated  - it re-rendered');
  }

  // React says we have to define Render!!!!
  render() {
    console.log('Render Ran');
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
