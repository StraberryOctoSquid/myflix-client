import { useState } from "react";

// export const addFavorite = (movie, token, user) => {
//   console.log("movie title", movie.Title);
//   console.log("movieid", movie._id);
//   console.log("token", token);
//   console.log("user", user);
//   console.log("Username", user.Username);

// const [token, setToken] = useState(storedToken);

export const addFavorite = (movie, token, user, setUser) => {
  fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
    method: "GET",
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("added to favorite");
        return res.json();
      }
    }).then((data) => {
      console.log("Data:", data);
      // setIsFavorite(true);
      // localStorage.setItem("user, JSON.stringify(data)");
      setUser(data);
      alert("Added to Favorites");
    })
    .catch((err) => {
      console.log(err);
    });
};
// addToFavorite();



return {
};




// }






