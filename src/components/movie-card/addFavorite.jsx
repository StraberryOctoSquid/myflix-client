// Create a function called addFavorite(movieId) in src\movie-card\addFavorite.jsx that will make a GET request to the /users/:Username/movies/:MovieID endpoint in the backend. (You will need to pass a JWT in the Authorization header.) The function should return an object with a type of ADD_FAVORITE and a movieId property.
//
// Create a function called removeFavorite(movieId) in src\movie-card\removeFavorite.jsx that will make a DELETE request to the /users/:Username/movies/:MovieID endpoint in the backend. (You will need to pass a JWT in the Authorization header.) The function should return an object with a type of REMOVE_FAVORITE and a movieId property.
//



export const addFavorite = (movie.Id) => {
  return {
    type: ADD_FAVORITE,
    movieId,
  };
}

export const removeFavorite = (movie.Id) => {
  return {
    type: REMOVE_FAVORITE,
    movieId,
  };
}


