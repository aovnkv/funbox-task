import React, { Component } from 'react';
import './CardsContainer.css';
import CardItem from './CardItem';

export default class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, topTitle: 'Сказочное заморское явство' },
        { id: 2, topTitle: 'Сказочное заморское явство' },
        { id: 3, topTitle: 'Сказочное заморское явство' }
      ]
    };
  }
  render() {
    const items = this.state.items.map(item => (
      <CardItem id={item.id} topTitle={item.topTitle} />
    ));
    return <div className="CardsContainer">{items}</div>;
  }
}
