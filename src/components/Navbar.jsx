import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [showServices, setShowServices] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">FleskVroom </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Accueil </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product"> Recherche </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/annonce">Vendre Voiture</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">À Propos</NavLink>
                        </li>
                        <li className="nav-item dropdown"
                            onMouseEnter={() => setShowServices(true)}
                            onMouseLeave={() => setShowServices(false)}
                        >
                            <NavLink className="nav-link dropdown-toggle" to="/service" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Nos services
                            </NavLink>
                            <div className={`dropdown-menu ${showServices ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/estimation">Estimer prix par voiture</NavLink>
                                <NavLink className="dropdown-item" to="/expert">Expert pour voiture</NavLink>
                            </div>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Se Connecter</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> S'inscrire</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;