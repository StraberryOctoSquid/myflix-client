import PropTypes from "prop-types";
import { Button, Card } from 'react-bootstrap';


// ?Exprot variable moviecard with properties movie and onmovieclick?
// ?WHat does the rest of this code do?
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100" onClick={() => onMovieClick(movie)}>
      <Card.Img variant="top" src={movie.ImagePath} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Button onClick={() => onMovieClick(movie)} variant="link">Open</Button>
      </Card.Body>

    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Actors: PropTypes.array.isRequired,
    Description: PropTypes.string.isRequired,
    Director: PropTypes.object,
    Featured: PropTypes.bool,
    Genre: PropTypes.object,
    ImagePath: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};