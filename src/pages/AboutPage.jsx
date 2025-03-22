import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About FleskVroom</h1>
        <hr />
        <p className="lead text-center">
          At FleskVroom, we are passionate about connecting people with their dream cars.
          With years of experience in the automotive industry, we pride ourselves on offering a wide selection
          of high-quality vehicles, competitive prices, and exceptional customer service.
        </p>

        <h2 className="text-center py-4">Our Car Selection</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Sedan" height={160} style={{ objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Sedans</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600" alt="SUV" height={160} style={{ objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title text-center">SUVs</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2024/trucks/colorado/nav/01-images/2024-colorado-4zr-glt-driver-front-3quarter-nav.jpg?imwidth=960" alt="Truck" height={160} style={{ objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Trucks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://www.popsci.com/wp-content/uploads/2023/11/09/Ford-Mach-E-awd.jpg?quality=85" alt="Electric Cars" height={160} style={{ objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title text-center">Electric Cars</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h3>Our Mission</h3>
            <p>
              To provide a seamless and trustworthy car buying experience, offering a diverse range of vehicles
              to meet every customer's needs and preferences.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;