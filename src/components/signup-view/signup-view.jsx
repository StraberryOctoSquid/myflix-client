import React, { useState } from "react";
import { Form, Button, Card, CardGroup, Container, Col, Row } from "react-bootstrap";


export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch("https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.replace("/login");

      } else {
        alert("Signup failed");
      }
    });
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <CardGroup>
            <Card className="signup-card">
              <Card.Title className="login-title"><h1>Welcome to myFlix</h1><h3>Create a New Account</h3> </Card.Title>
              <Card.Body>


                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="formBasicUsername">
                    {/* <Form.Label>Username:</Form.Label> */}
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required minLength="3" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password:</Form.Label> */}
                    <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength="3" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email:</Form.Label> */}
                    <Form.Control type="email" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} required minLength="3" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBirthday">
                    {/* <Form.Label>Birthday:</Form.Label> */}
                    <Form.Control type="date" placeholder="Enter birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Sign Up
                  </Button>
                </Form >
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container >

    //   <form onSubmit={handleSubmit}>
    //     {/* <label>
    //       Username:
    //       <input
    //         type="text"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         requiredminlength="3"
    //       /> */}
    //     {/* </label> */}
    //     <label>
    //       Password:
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       Email:
    //       <input
    //         type="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <label>
    //       Birthday:
    //       <input
    //         type="date"
    //         value={birthday}
    //         onChange={(e) => setBirthday(e.target.value)}
    //         required
    //       />
    //     </label>
    //     <button type="submit">Submit</button>
    //   </form>
    //           );
    // };
  );
};