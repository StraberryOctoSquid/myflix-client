import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      description: "Brian is a 16 year-old who can't play basketball, but he still wants to play like his hero, Kevin Durant. At an Oklahoma City Thunder game, Brian gets chosen to shoot a half court shot which he misses and hits the mascot in the process. Later on, he gets a chance to meet Durant and expresses his desire to play just like him. When Kevin gives Brian the ball, the two unknowingly switch talents.",
      genre: "Comedy",
      title: "Thunderstruck",
      image: "https://en.wikipedia.org/wiki/File:Thunderstruck2012Poster.jpg",
      director: "John Whitesell",
      featured: true,
    },
    {
      id: 2,
      description: "The lives of a young couple intertwine with a much older man as he reflects back on a lost love while he's trapped in an automobile crash.",
      genre: "Romantic Drama",
      title: "The Longest Ride",
      image: "#",
      director: "George Tillman jr.",
      featured: false,
    },
    {
      id: 3,
      description: "A Marine war veteran faces mental and emotional challenges when he tries to reintegrate back into civilian life.",
      genre: "Drama, Thriller",
      title: "Breaking",
      image: "#",
      director: "Abi Damaris Corbin",
      featured: false,
    },

  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
