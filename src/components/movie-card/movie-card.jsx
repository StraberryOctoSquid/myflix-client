import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { addFavorite } from "../movie-card/addFavorite.jsx"
import { useState } from "react";

export const MovieCard = ({ movie, token, user, setUser }) => {
  const removeFavorite = (movie, token, user, setUser) => {
    console.log("removeFavorite");
    fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("removed from favorite");
          return res.json();
        }
      }).then((data) => {
        console.log("Data:", data);
        // setIsFavorite(false);
        setUser(data);
        alert("Removed from Favorites");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [isFavorite, setIsFavorite] = useState(true);

  // console.log("user", user);
  // console.log("user.FavoriteMovies", user.FavoriteMovies);
  // const [x, setX] = useState("one");

  // const checkFavorite = (movie, user) => {

  //   if (user.FavoriteMovies.includes(movie._id)) {

  //     setX("Remove from Favorites");
  //   } else {
  //     setX("Add to Favorites");
  //   }

  // }

  // checkFavorite(movie, user);

  return (

    < Card >

      <Card.Img variant="top" src={movie.ImagePath} />


      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
        {/* create a button that allows a user to add a movie to user.favorites */}

        {isFavorite ? (
          <Button variant="link" onClick={() => removeFavorite(movie, token, user, setUser)}>Remove from Favorites</Button>
        ) : (
          <Button variant="link" onClick={() => addFavorite(movie, token, user, setUser)}>Add to Favorites</Button>
        )}
        {/* <Button variant="link" onClick={() => addFavorite(movie, token, user)}>{x}</Button> */}


      </Card.Body>


    </Card >
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

// create a function that checks weather or not a movie is in the user.favorites array
// if it is not in the array, change the text of the button to "Add to Favorites"
// if it is in the array, change the text of the button to "Remove from Favorites"

