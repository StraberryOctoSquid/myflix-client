// import PropTypes from "prop-types";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.title}
    </div>
  );
};

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     actors: PropTypes.array.isRequired,
//     description: PropTypes.string.isRequired,
//     director: PropTypes.object,
//     featured: PropTypes.boolean,
//     genre: PropTypes.object,
//     imagePath: PropTypes.string,
//     id: PropTypes.integer,
//   }).isRequired,
//   onBookClick: PropTypes.func.isRequired
// };