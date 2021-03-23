import React from 'react';
import {useHistory} from 'react-router-dom';

export default function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore, id } = props.movie;

  //declare history
  const history = useHistory();

  //add a click function to push the url with id to history
  const routeToMovie = () => {
    history.push(`/movie/${id}`)
  }
  return (
    // 3.Added a onClick to movie card
    <div className="movie-card"
    onClick={routeToMovie}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
