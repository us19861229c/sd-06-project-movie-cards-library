// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesList = movies
    .map((movie) => (
      <li className="movie-card" key={movie.title}>
        <MovieCard
          movie={movie}
        />
      </li>
    ));
    return <div className="movie-list">{moviesList}</div>;
  }
}

MovieList.defaultProps = { movies: [] };

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object) };

export default MovieList;
