import { useState } from "react";
import { Form, Button, Card, CardGroup, Container, Col, Row } from "react-bootstrap";
import "./login-view.scss";
export const LoginView = ({ onLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password
    };

    fetch("https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Login response: ", data);
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.setItem("token", data.token);
          onLoggedIn(data.user, data.token);
        } else {
          alert("No such user");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <CardGroup>
            <Card className="login-card">
              <Card.Title className="login-title">myFlix</Card.Title>
              {/* <Card.Header className="login-header">Welcome to the registration page!</Card.Header> */}
              <Card.Body>




                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    {/* <Form.Label>Username:</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength="3" />
                    {/* <Form.Text className="text-muted">
                    We'll never share your username with anyone else.
                  </Form.Text> */}
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password:</Form.Label> */}
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="3" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Sign In
                  </Button>
                </Form >
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>



  );
};
