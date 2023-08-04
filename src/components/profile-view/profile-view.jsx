import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { Col, Row, Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const ProfileView = ({ user, token, movie, updatedUser, loggedOut }) => {
  // create a function allowing a user to delete their account
  const deleteAccount = () => {
    fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (response.ok) {
          alert("Your account has been deleted");
          window.location.replace("/signup");
          loggedOut();
        }
      })
      .catch((e) => {
        alert("Account deletion failed");
      });
  };

  return (
    console.log("user", user),
    <>
      <Container id="profile-container">
        <div className="mx-auto" id="box-profile-view">
          <div id="form-signup">
            <Card.Title className="font-style" id="settings-heading">
              Settings
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
              <Link to={`/users/password-update`}
                id="password-link"
                className="password-edit"
              >
                <Card.Text className="font-style" >
                  Update Password
                </Card.Text>
              </Link>
            </Col>
            <Link to={`/users/updateUser`} className="user-edit">
            </Link>
            <Link to={`/users/updateUser`} className="user-edit">
              <span className="edit-user font-style">Edit All</span>
            </Link>
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


