import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies

    return (
      <div className='movie-card movie-card-body'>
        <img src={imagePath} alt='Movie Avatar' className='movie-card-image' />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={rating} />
      </div>
    )
  }
}

export default MovieCard;
