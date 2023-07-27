import "bootstrap/dist/css/bootstrap.min.css";
import image from "../../assets/logo.png";
import { LoginForm } from "../../components";
import WaveBackground from "../Pomodoro/background";

export default function Login() {
  return (
    <>
      <div className="wrapper">
        <WaveBackground paused={false} />
        <div className="container main">
          <div className="row login">
            <div className="col-md-6 side-image">
              <img src="https://i.imgur.com/APlwr5r.png" alt="logo" />
            </div>
            <div className="col-md-6 right">
              <div className="small-logo">
                <img src="https://i.imgur.com/APlwr5r.png" alt="" />
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
