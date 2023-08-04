import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProfileView } from "../profile-view/profile-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);


  // Q: I would like to better understand the useEffect function.
  // A: useEffect is a React hook that allows you to perform side effects in function components.
  //    Side effects are things like fetching data, manipulating the DOM, and so on.
  //    useEffect is a function that takes a callback function as its first argument.
  //    The callback function is the side effect.
  //    The second argument is an array of dependencies.
  //    The callback function will only be executed when the dependencies change between renders.
  //    If the dependencies are an empty array, the callback function will only be executed once.
  //    If the dependencies are not provided, the callback function will be executed after every render.
  //    The callback function can optionally return a cleanup function.
  //    The cleanup function will be executed before the callback function is executed again.
  //    The cleanup function can be used to cancel any pending requests, or clean up any subscriptions.
  //    The cleanup function will also be executed when the component unmounts.
  //    The callback function can optionally return a promise.
  //    If the callback function returns a promise, the cleanup function will wait for the promise to resolve before executing.



  useEffect(() => {
    if (!token)
      return;
    fetch("https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.map((movie) => {
          console.log(movie);
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
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          setUser(null);
          setToken(null);
        }}
      />
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
                  // <Col md={5}>
                  <LoginView
                    onLoggedIn={(user, token) => {
                      setUser(user);
                      console.log("user", user);
                      setToken(token);
                    }}
                  />
                  // </Col>
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
                  <Navigate to="/login" replace />
                ) :
                  movies.length === 0 ? (
                    <Col> The List is Empty!</Col>
                  ) : (
                    <>
                      {movies.map((movie) => (
                        <Col className="mb-4" key={movie._id} md={3}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </>
                  )
                }
              </>
            }
          />






          <Route
            path="/users"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : (
                  <Col md={8}>
                    <ProfileView movies={movies} />
                  </Col>
                )}
              </>
            }
          />



        </Routes>
      </Row>
    </BrowserRouter>
  );
};
