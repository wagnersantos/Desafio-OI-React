import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import store from '../../store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <div className='row'>  
            <Header />
          </div>
          <div className='row'>
             <Main />
          </div>
          <div className='row'>
             <Footer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
