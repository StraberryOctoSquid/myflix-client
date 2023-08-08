import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card>

      <Card.Img variant="top" src={movie.ImagePath} />


      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
        {/* create a button that allows a user to add a movie to user.favorites */}
        <Button variant="link" onClick={() => addFavorite(movie._id)}>Add to Favorites</Button>
        console.log("movie", movie),
        console.log("movieId", movie._Id),

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
    _id: PropTypes.string,
  }).isRequired,
};