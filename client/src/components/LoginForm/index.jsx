import "./styles.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
      <>
        <form>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="input-field">
                <input type="submit" className="submit" value="Login" />
            </div>
            <div className="signup">
                <span>Don't have an account? <Link to="/signup">Register here</Link></span>
            </div>
        </form>
      </>
  )
}
