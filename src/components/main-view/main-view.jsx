import { useEffect, useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
// import "./main-view.scss";
import { Col, Nav, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  // const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  useEffect(() => {
    //  ?if there is no token, then finish this function?
    if (!token)
      return;
    // ?if there is a token then fetch movies using the baerer token
    fetch("https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      // ?the format of the res will be json. we will call that response data?  
      .then((response) => response.json())
      .then((data) => {

        // ?.map function creates new array for each movie object in database
        // ?What happens with the data that is included with the response but not loaded? Where is it? In the browser?Local storage?
        const moviesFromApi = data.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            Description: movie.Description,
            Actors: [movie.Actors],
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description,
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
            },
            Featured: movie.Featured,
          };
        });
        setMovies(moviesFromApi);
      })

      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

    // If the token changes this function will run again.
  }, [token]);

  // ?If no user load loginview or signupview?
  return (
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>

          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <SignupView />
                  </Col>
                )}
              </>

            }
          />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5}>
                    <LoginView
                      onLoggedIn={(user, token) => {
                        setUser(user);
                        console.log("user", user);
                        setToken(token);
                      }}
                    />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <Col> The List is Empty!</Col>
                ) : (
                  <Col md={8}>
                    <MovieView movies={movies} />
                  </Col>
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <>
                {!user ? (
                  // Show movies
                  <Navigate to="/login" replace />
                ) :
                  movies.length === 0 ? (
                    <Col> The List is Empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-4 key={movie._id}" md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </>
                  )
                }
              </>
            }
          />

        </Routes>
      </Row>
    </BrowserRouter>
  );
};
