import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import SweetAlert

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir vous déconnecter?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform any necessary logout actions (e.g., clearing cookies, etc.)
        navigate('/login'); // Redirect to the login page
      }
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">FleskVroom Admin</NavLink>
        <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#adminNavbarSupportedContent" aria-controls="adminNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbarSupportedContent">
          <ul className="navbar-nav my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/dashboard">Tableau de Bord</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/users">Gérer les Utilisateurs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/listings">Valider les Annonces</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/payments">Surveiller les Paiements</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav my-2 text-center ms-auto">
             <li className="nav-item">
              <button className="btn btn-danger" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;