import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
