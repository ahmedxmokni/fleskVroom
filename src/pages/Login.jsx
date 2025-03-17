import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="display-4">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3 d-flex justify-content-between">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link></p>
                <p><Link to="/forgot-password" className="text-decoration-underline text-info">Forgot Password?</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                  Login
                </button>
              </div>
            </form>
            <hr />
            <div className="text-center">
              <p>Or continue with</p>
                <button className="btn btn-outline-dark my-2 mx-1">
                  <img src="https://img.icons8.com/?size=512&id=17949&format=png" alt="Google" style={{ width: "20px", height: "20px" }} /> 
                </button>
                <button className="btn btn-outline-dark my-2 mx-1">
                  <i className="fab fa-facebook" style={{ color: "#3b5998" }}></i> 
                </button>
                <button className="btn btn-outline-dark my-2 mx-1">
                  <i className="fab fa-twitter" style={{ color: "#1DA1F2" }}></i> 
                </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;