import { SignupForm } from "../../components";

export default function Signup() {
  return (
    <>
        <div className="signup-wrapper">
            <div className=" container main">
                <div className="row">
                    <div className="col-md-6 side-image">
                        <img src="src/assets/logo.png" alt=""/>
                    </div>
                    <div className="col-md-6 right">
                        <div className="small-logo">
                            <img src="src/assets/logo.png" alt=""/>
                        </div>
                        <div className="input-box">
                            <header>Create Account</header>
                            <SignupForm />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
