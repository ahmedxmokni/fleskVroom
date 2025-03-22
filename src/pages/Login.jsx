import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const users = {
    admin: {
      email: "admin@example.com",
      password: "password",
      role: "admin",
    },
    expert: {
      email: "expert@example.com",
      password: "password",
      role: "expert",
    },
    user: {
      email: "user@example.com",
      password: "password",
      role: "user",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const role in users) {
      if (
        email === users[role].email &&
        password === users[role].password
      ) {
        setLoginMessage(`Logged in as ${role}`);
        // Store authentication token in local storage
        localStorage.setItem("authToken", "loggedIn");

        // Redirect based on role (replace with your actual routes)
        switch (role) {
          case "admin":
            navigate("/admin/dashboard");
            break;
          case "expert":
            navigate("/expert");
            break;
          default:
            navigate("/user/dashboard");
        }
        return;
      }
    }

    setLoginMessage("Invalid credentials");
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3 d-flex justify-content-between">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>
                </p>
                <p>
                  <Link
                    to="/forgot-password"
                    className="text-decoration-underline text-info"
                  >
                    Forgot Password?
                  </Link>
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Login
                </button>
              </div>
              {loginMessage && (
                <p className="text-center text-danger">{loginMessage}</p>
              )}
            </form>
            <hr />
            <div className="text-center">
              <p>Or continue with</p>
              <button className="btn btn-outline-dark my-2 mx-1">
                <img
                  src="https://img.icons8.com/?size=512&id=17949&format=png"
                  alt="Google"
                  style={{ width: "20px", height: "20px" }}
                />
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