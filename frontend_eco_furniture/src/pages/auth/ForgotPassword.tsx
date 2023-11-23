import React from "react";
import "../../assets/css/login.css";

function ForgotPassword() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card mt-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 mb-2">Forgot Your Password?</h1>
                      <p className="text-muted mb-4">
                        We get it, stuff happens. Just enter your email address
                        below and we'll send you a link to reset your password!
                      </p>
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
                      <a
                        href="/login"
                        className="btn btn-primary btn-user w-100 mb-3"
                      >
                        Reset Password
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a href="/register">
                        Create an Account!
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
      </div>
    </div>
  );
}

export default ForgotPassword;
