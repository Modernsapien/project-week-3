import { LoginForm } from "../../components";

const Login = () => {

  return (
    <>
        <div className="wrapper">
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
                            <header>Welcome to Study Wise</header>
                            <LoginForm />
                        </div>  
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default Login;
