import { Row, Col } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';


export const WatchList = ({ user, token, movies, updatedUser }) => {
  let result = movies.filter((movie) => user.FavoriteMovies.includes(movie._id));
  console.log("all of the movies", movies)
  return (
    <>
      <Row>
        {result.map((movie) => (
          <Col className='mb-4' md={3}>
            <MovieCard
              movie={movie}
              user={user}
              updatedUser={updatedUser}
              token={token}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};