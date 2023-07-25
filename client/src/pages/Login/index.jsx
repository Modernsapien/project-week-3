
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginForm } from "../../components";

export default function Login() {
  return (
    <>
        <div className="wrapper">
            <div className="container main">
                <div className="row login">
                    <div className="col-md-6 side-image">
                        <img src="src/assets/logo.png" alt=""/>
                    </div>
                    <div className="col-md-6 right">
                        <div className="small-logo">
                            <img src="src/assets/logo.png" alt=""/>
                        </div>
                        <div className="input-box">
                            <header>Welcome to Study Wise</header>
                            <LoginForm />
                        </div>  
                    </div>
                </div>
            </div>
          </div>
    </>
  );
}
