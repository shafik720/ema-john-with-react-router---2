import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import app from './firebase.init';



const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [registered, setRegistered] = useState(false);

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleCheckbox(e) {
    setRegistered(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <div>
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-lg-5 mx-auto">
            <Form>
              <h2 className="text-primary text-center"> {registered ? 'Log In' : 'Sign Up'} </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Your Email</h5>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <h5>Your Password</h5>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onChange={handleCheckbox} type="checkbox" label="Already Registered" />
              </Form.Group>
              <h4 className="text-danger">{error}</h4>
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
          </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
