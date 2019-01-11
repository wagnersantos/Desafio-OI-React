import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import store from '../../store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container"> 
        <Provider store={store}>
            <Header />
            <Main />
            <Footer />
        </Provider>
      </div>
    );
  }
}

export default App;
