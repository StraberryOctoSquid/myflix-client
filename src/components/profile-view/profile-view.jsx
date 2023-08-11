import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Col, Row, Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const ProfileView = ({ user, token, movies, setUser, onLoggedOut }) => {
  console.log("token", token);
  const deleteAccount = () => {
    fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          alert("Your account has been deleted");
          window.location.replace("/signup");
          onLoggedOut();
        }
      })
      .catch((e) => {
        alert("Account deletion failed");
        console.log(e);
      });
  };

  return (
    console.log("token", token, "movies", movies),
    <>
      <Container id="profile-container">
        <div className="mx-auto" id="box-profile-view">
          <div id="form-signup">
            <Card.Title className="font-style" id="settings-heading">
              Profile
            </Card.Title>
            <Col className="mt-2">
              <Card.Text className="font-style" >
                Username: {user.Username}
              </Card.Text>
            </Col>
            <Col className="mt-2">
              <Card.Text className="font-style" >
                {/* Does not work if birthdate is null.
                ?Is birthday field not validating input in signup? */}
                Birthday: {user.Birthday.slice(0, 10)}
              </Card.Text>
            </Col>
            <Col className="mt-2">
              <Card.Text className="font-style" >
                Email: {user.Email}
              </Card.Text>
            </Col>
            <Col className="mt-2">


              {/* // Why are components sometimes called like above and sometimes like below?
                  // <WatchList
                  //   user={user}
                  //   token={token}
                  //   movies={movies}
                  //   updatedUser={updatedUser}
                  // />; */}


            </Col>

            <Link to={`/users/updateUser`} className="user-edit" >
              <span className="edit-user font-style">Edit All</span>
            </Link>

            {/* style this using row? */}
            <br />

            <Button
              className="delete-btn font-style"
              variant="btn btn-danger"
              onClick={() => {
                deleteAccount();
              }}
            >
              Delete Account
            </Button>

          </div>
        </div>
      </Container>
    </>
  );
};


