import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';





function App() {
  
  return (
    <div>
      <div className="container my-5">
        <div className="row mt-5">
            <div className="col-lg-5 mx-auto">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <h5>Your Email</h5>
                <Form.Control type="email" placeholder="Enter email" />                
            </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <h5>Your Password</h5>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          
          <Button variant="primary" type="submit">
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
