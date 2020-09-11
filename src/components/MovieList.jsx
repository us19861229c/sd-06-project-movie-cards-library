// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';


class MovieList extends React.Component {
  render() {
    return (
            this.props.movies.map(element => <MovieCard movie={element} key={element.title} />)
        );
    }
}

MovieList.propType = {
  movies: PropTypes.array,
};

export default MovieList;
