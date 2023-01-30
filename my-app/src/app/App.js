import './App.css';
import React from 'react';
import Header from '../header/Header';
import Main from '../main/Main';
import Services from '../services/Services';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Services />
      </div>
    );
  }  
}

export default App;
