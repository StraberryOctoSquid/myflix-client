import { Col, Container, Nav } from "react-bootstrap";
import { Button, Card } from "react-bootstrap";
import "./profile-view.scss";

export const ProfileView = ({ user, token, movies, setUser, onLoggedOut }) => {
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
    <>
      <Container
        id="profile-container">
        <div
          className="justify-content-md-center" id="box-profile-view">
          <Card.Title
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
              Birthday: {user.Birthday.slice(0, 10)}
            </Card.Text>
          </Col>
          <Col className="mt-2">
            <Card.Text className="font-style" >
              Email: {user.Email}
            </Card.Text>
          </Col>

          <Col className="mt-2">
            <Nav fill variant="pills" defaultActiveKey="/users/updateUser">
              <Nav.Item>
                <Nav.Link
                  href="/users/updateUser"
                >Edit Profile</Nav.Link>
              </Nav.Item>
            </Nav>


          </Col>

          <Col className="d-grid gap-2">
            <Button
              id="delete-btn"
              className="delete-btn font-style"
              variant="danger"
              onClick={() => {
                deleteAccount();
              }}
            >
              Delete Account
            </Button>
          </Col>

        </div>
        {/* </div> */}
      </Container>
    </>
  );
};


