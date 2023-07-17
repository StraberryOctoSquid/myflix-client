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
      image: "https://upload.wikimedia.org/wikipedia/en/7/75/Thunderstruck2012Poster.jpg",
      director: "John Whitesell",
      featured: true,
    },
    {
      id: 2,
      description: "The lives of a young couple intertwine with a much older man as he reflects back on a lost love while he's trapped in an automobile crash.",
      genre: "Romantic Drama",
      title: "The Longest Ride",
      image: "data:image/jpeg;base64,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",
      director: "George Tillman jr.",
      featured: false,
    },
    {
      id: 3,
      description: "A Marine war veteran faces mental and emotional challenges when he tries to reintegrate back into civilian life.",
      genre: "Drama, Thriller",
      title: "Breaking",
      image: "data:image/jpeg;base64,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",
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
