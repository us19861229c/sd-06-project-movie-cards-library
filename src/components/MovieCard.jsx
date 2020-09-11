import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <img src={imagePath} alt="Movie" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};
MovieCard.defaultProps = {
  title: null,
  subtitle: null,
  storyline: null,
  rating: null,
  imagePath: null,
};

export default MovieCard;
