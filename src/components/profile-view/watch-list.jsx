// delete this whole file?? not sure if it's needed
import { Row, Col, Container } from 'react-bootstrap';

export const WatchList = (user) => {
  console.log("fart");
  console.log("user", user);
  console.log("favMovies", user.FavoriteMovies);


  return (
    console.log("fart1"),
    <Container>
      <Row className="justify-content-md-center">
        <Col md={12}>
          <h1 className="font-style">Watch List</h1>
          <h2 className="font-style">Movies you want to watch</h2>
        </Col>
      </Row>
    </Container>
  );
};