import React, { Component } from 'react';
import '../node_modules/modern-normalize/modern-normalize.css';
import './App.css';
import CardsContainer from './CardsContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <h1 className="AppTitle">Ты сегодня покормил кота?</h1>
          <CardsContainer />
        </div>
      </div>
    );
  }
}

export default App;
