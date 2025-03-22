import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserNavbar, Main, Product, Footer } from '../../components';

const UserDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      // If not authenticated, redirect to login page
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <UserNavbar />
      <Main />
      <Product />
      <Footer />
    </>
  );
};

export default UserDashboard;