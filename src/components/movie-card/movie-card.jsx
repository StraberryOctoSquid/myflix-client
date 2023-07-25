// ? Props are arguments passed into React components?
// ? What is index.d.ts?
import PropTypes from "prop-types";

// ?Exprot variable moviecard with properties movie and onmovieclick?
// ?WHat does the rest of this code do?
export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
  );
};

// ?PropTypes= I understand the basic idea, do I need to know more?
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