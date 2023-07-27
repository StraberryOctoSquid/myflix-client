import "./movie-view.scss";
import { Col, Row } from "react-bootstrap";


export const MovieView = ({ movie, onBackClick }) => {

  return (
    <Col md={8} style={{ border: "1px solid black" }}>
      <Row style={{ border: "1px blue" }} className="justify-content-md-center">
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
      </Row>
    </Col>
  );
};
