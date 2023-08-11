import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";

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
      <Container
        className="d-flex justify-content-center"
        id="profile-container">
        <div
          // style={{ border: "solid 1px black" }}
          className="justify-content-md-center" id="box-profile-view">
          <Card.Title
            //center this card title
            // className="d-flex justify-content-center"
            className="font-style" id="settings-heading"
          >
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
        {/* </div> */}
      </Container>
    </>
  );
};


