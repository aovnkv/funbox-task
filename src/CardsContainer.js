import React, { Component } from 'react';
import './CardsContainer.css';
import CardItem from './CardItem';

export default class CardsContainer extends Component {
  state = {
    items: [
      {
        id: 1,
        topTitle: 'Сказочное заморское явство',
        mTitle: 'Нямушка',
        taste: 'с фуа-гра',
        options: ['10 порций', 'мышь в подарок'],
        weight: '0,5',
        description: 'Печень утки разварная с артишоками.',
        available: true
      },
      {
        id: 2,
        topTitle: 'Сказочное заморское явство',
        mTitle: 'Нямушка',
        taste: 'с рыбой',
        options: ['40 порций', '2 мыши в подарок'],
        weight: '2',
        description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        available: true
      },
      {
        id: 3,
        topTitle: 'Сказочное заморское явство',
        mTitle: 'Нямушка',
        taste: 'с курой',
        options: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
        weight: '5',
        description: 'Филе из цыплят с трюфелями в бульоне.',
        available: false
      }
    ]
  };

  render() {
    const items = this.state.items.map(item => (
      <CardItem key={item.id} {...item} />
    ));
    return <div className="CardsContainer">{items}</div>;
  }
}
