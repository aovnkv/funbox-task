import React, { Component } from 'react';
import './CardItem.scss';

export default class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, disabled: false };
  }
  render() {
    return (
      <div className="CardItem">
        <div className="Card">
          <div className="CardHeader">
            <h3 className="CardHeader-title">Сказочное заморское яство</h3>
          </div>
          <div className="CardInner">
            <h1 className="CardInner-title">Нямушка</h1>
            <h2 className="CardInner-subtitle">с фуа-гра</h2>
            <div className="CardInner-weight">
              <div className="CardInner-weight-val">0,5</div>
              <div className="CardInner-weight-metrics">кг</div>
            </div>
          </div>
        </div>
        <p className="BuyIt">
          Чего сидишь? Порадуй котэ,{' '}
          <a href="/">
            <span>купи</span>
          </a>
          .
        </p>
      </div>
    );
  }
}
