import React, { Component } from 'react';
import './App.css';
import CardsContainer from './CardsContainer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppContainer">
          <h1>Ты сегодня покормил кота?</h1>
          <CardsContainer />
        </div>
      </div>
    );
  }
}

export default App;
