import React, { Component } from 'react';
import './CardItem.scss';

const OptionItem = ({ optStr, digit }) =>
  digit ? (
    <p>
      <strong>{digit[0]}</strong>
      {optStr}
    </p>
  ) : (
    <p>{optStr}</p>
  );

const CardDescription = ({
  selected,
  available,
  taste,
  description,
  handleClick
}) =>
  available ? (
    selected ? (
      <p>{description}</p>
    ) : (
      <p>
        Чего сидишь? Порадуй котэ, <span onClick={handleClick}>купи</span>.
      </p>
    )
  ) : (
    <p>Печалька, {taste} закончился.</p>
  );

class CardItem extends Component {
  state = { selected: false, hoverFreeze: false, hovered: false };

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
      hovered: false,
      hoverFreeze: true
    }));
  };

  handleMouseOver = () => {
    if (!this.state.hoverFreeze) this.setState({ hovered: true });
  };

  handleMouseOut = () => {
    this.setState({ hovered: false, hoverFreeze: false });
  };

  render() {
    const {
      topTitle,
      mTitle,
      taste,
      options,
      weight,
      description,
      available
    } = this.props;
    const { selected, hovered } = this.state;

    const opts = options.map((opt, index) => {
      let digit;
      const regex = /\d+/;
      if (regex.test(opt)) {
        digit = opt.match(regex);
        opt = opt.replace(regex, '');
      }
      return <OptionItem key={index} optStr={opt} digit={digit} />;
    });

    return (
      <div
        className={
          selected
            ? 'CardItem selected'
            : !available
            ? 'CardItem disabled'
            : 'CardItem'
        }
      >
        <div
          className={hovered ? 'Card hovered' : 'Card'}
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <div className="CardHeader">
            <h3 className="CardHeader--title">
              {selected && hovered ? 'Котэ не одобряет?' : topTitle}
            </h3>
          </div>
          <div className="CardInner">
            <h1 className="CardInner--title">{mTitle}</h1>
            <h2 className="CardInner--subtitle">{taste}</h2>
            <ul className="CardInner--options">{opts}</ul>
            <div className="CardInner--weight">
              <div className="CardInner--weight-val">{weight}</div>
              <div className="CardInner--weight-metrics">кг</div>
            </div>
          </div>
        </div>
        <div className="CardDescription">
          <CardDescription
            selected={selected}
            available={available}
            description={description}
            taste={taste}
            handleClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default CardItem;
