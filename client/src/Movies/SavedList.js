import React from 'react';
import {useHistory} from 'react-router-dom'
export default function SavedList(props) {
const history = useHistory();
const routeToMovieList = () => {
  history.push("/")
}
  return (
    // 5.added a onclick to navigate home
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="home-button"
      onClick={routeToMovieList}>Home</div>
    </div>
  );
}
