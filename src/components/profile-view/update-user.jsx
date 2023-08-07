import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
// import Toast, { Toaster } from 'react-hot-toast';

export const UpdateUser = ({ user, token, updatedUser }) => {
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


          // Toast.fire({
          //   icon: 'error',
          //   title: 'failed trying to change settings'
          // });
          return false;
        }
      })
      .then((user) => {
        if (user) {
          console.log('settings updated');
          // Toast.fire({
          //   icon: 'success',
          //   title: 'Settings updated'
          // });
          setTimeout(function () {
            window.location.replace('/profile');
          }, 2000);
        }
      })
      .catch((e) => {
        alert(e);
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
              type='text'
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
        <Button className='mt-4 col-9' variant='btn btn-success' type='submit'>
          Save
        </Button>
        <Link to={'/users'} className='link-style-update-user'>
          Back to Profile
        </Link>
      </div>
    </Form>
  );
};