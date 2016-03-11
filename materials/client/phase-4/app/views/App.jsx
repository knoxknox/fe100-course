import React from 'react';
import Router from 'react-router';
import Navigation from '../views/Navigation.jsx';

class App extends React.Component {

  render() {
    return(
      <div id="application">
        <Navigation />
        <Router.RouteHandler />
      </div>
    );
  }

}

export default App;
