import React from "react";
import "../../assets/css/login.css";

function Login() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card mt-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user mb-3"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user mb-3"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>

                      <a
                        href="/"
                        className="btn btn-primary btn-user w-100 mb-3"
                      >
                        Login
                      </a>
                      <hr />
                      <a
                        href="/"
                        className="btn btn-google btn-user w-100 mb-2"
                      >
                        <i className="fab fa-google fa-fw"></i>&nbsp;Login with
                        Google
                      </a>
                      <a
                        href="/"
                        className="btn btn-naver btn-user w-100 mb-2"
                      >
                        <i className="fa-solid fa-n"></i>&nbsp;Login with Naver
                      </a>
                      <a
                        href="/"
                        className="btn btn-kakao btn-user w-100 mb-3"
                      >
                        <i className="fa-solid fa-k"></i>&nbsp;Login with Kakao
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="/forgot-password">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="/register">
                        Create an Account!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
