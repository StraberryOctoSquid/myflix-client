// This view is the "home" or standard view that the client will experience.
// If a client is not registered, main view will import the signup view
// If a client is registered but not logged in, main view will import the login view.

// ?useEffect? (A hook that lets you synchronize a component with an external system) 
// useState? (A hook that lets you add a state variable to your component)
// (Why do they need to be imported from react?
import { useEffect, useState } from "react";
// MovieCard formats how movie information should be loaded and displayed
import { MovieCard } from "../movie-card/movie-card";
// MovieView formats the page when a movie is clicked on to display that movie's data.
import { MovieView } from "../movie-view/movie-view";
// LoginView creates a log in form for the client to use their credentials to log in. The form requires certain validation
import { LoginView } from "../login-view/login-view";
// Signupview creates a form for new users to sign up, it will store their information in the server, it requires validation.
import { SignupView } from "../signup-view/signup-view";

// Mainview is exported (with all of it's imports) to index.jsx
export const MainView = () => {
  // store the client's user name in local storage
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // Store the client's jwt token
  const storedToken = localStorage.getItem("token");
  // ?Create array of movies, setMovies
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);



  useEffect(() => {
    if (!token)
      return;

    fetch("https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((data) => {


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
  }, [token]);

  if (!user) {
    return (
      <>
        <LoginView
          onLoggedIn={(user, token) => {
            setUser(user);
            setToken(token);
          }}
        />
        or
        <SignupView />
      </>
    );
  }


  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!!</div>;
  }

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
