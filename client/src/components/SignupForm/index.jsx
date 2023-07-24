import "./styles.css";
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <>
        <form>
            <div className="name">
                <FloatingLabel controlId="floatingInput" label="First name" className="mb-3">
                    <Form.Control type="text" placeholder="firstname" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInput" label="Last name" className="mb-3">
                    <Form.Control type="text" placeholder="lastname" />
                </FloatingLabel>
            </div>
            <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
                <Form.Control type="email" placeholder="email@email.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Username" className="mb-3">
                <Form.Control type="text" placeholder="username" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="input-field">
                <input type="submit" className="submit" value="Register" />
            </div>
            <div className="signup">
                <span>Already have an account? <Link to="/login">Login here</Link></span>
            </div>
        </form>
    </>
  )
}
