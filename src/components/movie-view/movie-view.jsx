import "./movie-view.scss";
import { Col, Container, Row } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {

  return (
    <div>
      <button
        onClick={onBackClick}
        className="back-button"
        style={{ cursor: "pointer" }}
      >
        Back</button>
      <div>
        <img
          src={movie.ImagePath}
          className="movie-poster"
        />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name} </span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description} </span>
      </div>
    </div>
  );
};
