// This view is the "home" or standard view that the client will experience.
// If a client is not registered, main view will import the signup view
// If a client is registered but not logged in, main view will import the login view.

// ?useEffect? (A hook that lets you synchronize a component with an external system) 
// useState? (A hook that lets you add a state variable to your component)
import { useEffect, useState } from "react";
// MovieCard formats how movie information should be loaded and displayed
import { MovieCard } from "../movie-card/movie-card";
// MovieView formats the page when a movie is clicked on to display that movie's data.
import { MovieView } from "../movie-view/movie-view";
// LoginView creates a log in form for the client to use their credentials to log in. The form requires certain validation
import { LoginView } from "../login-view/login-view";
// Signupview creates a form for new users to sign up, it will store their information in the server, it requires validation.
import { SignupView } from "../signup-view/signup-view";
import "./main-view.scss";
import { Container, Row } from "react-bootstrap";
// Mainview is exported (with all of it's imports) to index.jsx
export const MainView = () => {
  // store the client's user name in local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // Store the client's jwt token
  const storedToken = localStorage.getItem("token");
  // ?create variables with state hooks and their default values?
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
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
    // ?what does this token do?
  }, [token]);

  // ?If no user load loginview or signupview?
  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        <div className="or">or</div>
        <SignupView />
      </>
    );
  }

  // ?If a movie is selected switch to movieview
  // ?Is this where onBackCLick is defined or given function?
  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!!</div>;
  }
  // ? if a movie is selected run .map on that movie to create an array for each property, loading key, movie and onMovieClick?
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie._id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
      <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
    </div>
  );
};
