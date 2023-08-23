export const addFavorite = (movie, token, user, setUser, setIsFavorite) => {
  fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}/movies/${movie._id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("added to favorite");
        return res.json();
      }
    }).then((data) => {
      setIsFavorite(true);
      localStorage.setItem("user", JSON.stringify(data));

      setUser(data);
    })
    .catch((err) => {
      console.log(err);
    });
};
return {
};
