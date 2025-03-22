import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <div className="container">
        <p>&copy; 2025 FleskVroom. All rights reserved.</p>
        <p>
          <a href="/terms" className="text-decoration-none text-dark">Terms of Service</a> | <a href="/privacy" className="text-decoration-none text-dark">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;