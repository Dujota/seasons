import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends Component {
  state = {
    lat: null,
    errorMessage: ''
  };

  componentDidMount() {
    console.log('My component did mount and was rendered to the screen');

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
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
      return <SeasonDisplay lat={lat} />;
    }

    return <div> Loading....</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
