import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardItem.scss';

export default class CardItem extends Component {
  state = { selected: false, hoverOff: false, hovered: false };

  handleClick = () => {
    this.setState(prevState => ({
      selected: !prevState.selected,
      hovered: false,
      hoverOff: true
    }));
  };

  handleMouseEnter = () => {
    if (!this.state.hoverOff) this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false, hoverOff: false });
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
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
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

CardItem.propTypes = {
  topTitle: PropTypes.string,
  mTitle: PropTypes.string,
  taste: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  weight: PropTypes.number,
  description: PropTypes.string,
  available: PropTypes.bool
};

OptionItem.propTypes = {
  optStr: PropTypes.string,
  digit: PropTypes.number
};

CardDescription.propTypes = {
  selected: PropTypes.bool,
  available: PropTypes.bool,
  handleClick: PropTypes.func
};
