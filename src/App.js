
import './App.css'
import { Form, Col , Row , Button} from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="add">name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="add">laste name</Form.Label>
    <Form.Control type="text" placeholder="Enter laste name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="add">age</Form.Label>
    <Form.Control type="age" placeholder="Enter age" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="add">Date of Birth</Form.Label>
    <Form.Control type="date" placeholder="Enter Date of Birth" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="add">Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label class="add">Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
