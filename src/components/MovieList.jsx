import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props
    return (
      <div className="movielist">
        {movies.map((movie) => (
          <MovieCard
          key={movie.title}
          title={movie.title}
          subtitle={movie.subtitle}
          storyline={movie.storyline}
          imagePath={movie.imagePath}/>
        ))}
      </div>
    );
  }
}
export default MovieList;
