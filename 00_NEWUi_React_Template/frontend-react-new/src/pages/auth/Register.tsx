import React from "react";
import "../../assets/css/login.css"

function Register() {
  return (
    <div>
      <div className="card mt-5">
        <div className="card-body p-0">
          {/* <!-- Nested Row within Card Body --> */}
          <div className="row">
            <div className="col-lg-5 bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user mb-3"
                      id="exampleName"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control form-control-user mb-3"
                      id="exampleInputEmail"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="password"
                        className="form-control form-control-user mb-3"
                        id="exampleInputPassword"
                        placeholder="Password"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="password"
                        className="form-control form-control-user mb-3"
                        id="exampleRepeatPassword"
                        placeholder="Repeat Password"
                      />
                    </div>
                  </div>
                  <a
                    href="/login"
                    className="btn btn-primary btn-user w-100 mb-3"
                  >
                    Register Account
                  </a>
                </form>
                <hr />
                <div className="text-center">
                  <a href="/forgot-password">
                    Forgot Password?
                  </a>
                </div>
                <div className="text-center">
                  <a href="/login">
                    Already have an account? Login!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
