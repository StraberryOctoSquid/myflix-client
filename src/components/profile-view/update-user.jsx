import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';

export const UpdateUser = ({ user, token, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmitUpdate = (event) => {
    event.preventDefault();


    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birthday: birthday
    };

    fetch(`https://straberryoctosquid-1858bcf4dbcb.herokuapp.com/users/${user.Username}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('failed to change settings');


          return false;
        }
      })
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        window.location.replace('/profile');
      })
      .catch((e) => {
        console.log(e);
      });
  };


  return (
    <Form
      className='mx-auto'
      id='box-update-user'
      onSubmit={handleSubmitUpdate}
    >
      <div id='form-update-user'>
        <h2>Update Info</h2>
        <Form.Group controlId='formNewPassword'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              minLength='7'
              placeholder='Username'
            />
            <InputGroup.Text id='input-style-update-user'>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formPassword'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              minLength='4'
            />
            <InputGroup.Text id='input-style-update-user'>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formEmail'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <InputGroup.Text id='input-style-update-user'>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Form.Group controlId='formBirthday'>
          <Form.Label></Form.Label>
          <InputGroup>
            <Form.Control
              type='date'
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder='Birthday'
            />
            <InputGroup.Text id='input-style-update-user'>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <Col className='d-grid gap-2'>
          <Button className='' variant='btn btn-success' type='submit'>
            Save
          </Button>
        </Col>
        <br />
        <Link to={'/profile'} className='link-style-update-user'>
          Back to Profile
        </Link>
      </div>
    </Form>
  );
};