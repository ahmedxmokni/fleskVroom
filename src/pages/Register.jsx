import React from 'react';
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div className="form my-3">
                                <label htmlFor="Name">Full Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already have an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled>
                                    Register
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

export default Register;