import "bootstrap/dist/css/bootstrap.min.css";
import { SignupForm } from "../../components";

import WaveBackground from "../Pomodoro/background";
export default function Signup() {
  return (
    <>
      <div className="signup-wrapper">
        <div className="container main">
          <div className="row signup">
            <div className="col-md-6 side-image">
              <img src="https://i.imgur.com/APlwr5r.png" alt="" />
            </div>
            <div className="col-md-6 right">
              <div className="small-logo">
                <img src="https://i.imgur.com/APlwr5r.png" alt="" />
              </div>
              <div className="input-box">
                <header>Create Account</header>
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
        <WaveBackground paused={false} />
      </div>
    </>
  );
}
