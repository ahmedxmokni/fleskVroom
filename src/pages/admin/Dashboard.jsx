import React from 'react';
import { AdminNavbar, Footer } from '../../components';

const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AdminNavbar />
      <div className="container my-5" style={{ flex: 1 }}>
        <h1 className="text-center">Tableau de Bord Administrateur</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Gérer les Utilisateurs</h5>
                <p className="card-text">Afficher, modifier et supprimer des utilisateurs.</p>
                <a href="#" className="btn btn-primary mt-auto">Accéder aux Utilisateurs</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Valider les Annonces</h5>
                <p className="card-text">Approuver ou rejeter les nouvelles annonces de voitures.</p>
                <a href="#" className="btn btn-primary mt-auto">Accéder aux Annonces</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Surveiller les Paiements</h5>
                <p className="card-text">Suivre et gérer les paiements des utilisateurs.</p>
                <a href="#" className="btn btn-primary mt-auto">Accéder aux Paiements</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 'auto' }} />
    </div>
  );
};

export default AdminDashboard;