import React, { useState } from "react";
import './App.css'; // Import the CSS file

const Home = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [zip, setZip] = useState("");
  const [condition, setCondition] = useState("new-used");
  const [distance, setDistance] = useState("30");

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement the filtering logic here
    console.log("Searching for cars with the following criteria:");
    console.log("Condition:", condition);
    console.log("Brand:", brand);
    console.log("Model:", model);
    console.log("Min Price:", minPrice);
    console.log("Max Price:", maxPrice);
    console.log("ZIP Code:", zip);
    console.log("Distance:", distance);
  };

  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            style={{ width: "100%", height: "550px", objectFit: "cover" }}
          />
          <div
            className="card-img-overlay d-flex flex-column align-items-start justify-content-end text-white p-4"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              animation: "fadeIn 2s ease-in-out",
            }}
          >
            <div
              className="bg-dark bg-opacity-50 p-3"
              style={{ borderRadius: "8px" }}
            >
              <h5 className="card-title fs-1 fw-lighter">
                Trouvez votre voiture idéale dès aujourd'hui!
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                🚀 "Trouvez une voiture qui correspond à votre style et votre budget. Des prix compétitifs, un service rapide!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <form onSubmit={handleSearch} className="row g-3">
          <div className="col-md-2">
            <label htmlFor="condition" className="form-label">Condition</label>
            <select
              className="form-select"
              id="condition"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="new-used">Neuf & Occasion</option>
              <option value="new">Nouveau</option>
              <option value="used">Occasion</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="brand" className="form-label">Marque</label>
            <select
              className="form-select"
              id="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Sélectionner une marque</option>
              <option value="Tesla">Tesla</option>
              <option value="Toyota">Toyota</option>
              <option value="Ford">Ford</option>
              {/* Add more brands here */}
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="model" className="form-label">Modèle</label>
            <select
              className="form-select"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option value="">Sélectionner un modèle</option>
              <option value="Model S">Model S</option>
              <option value="Model 3">Model 3</option>
              <option value="Model X">Model X</option>
              {/* Add more models here */}
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="distance" className="form-label">Distance</label>
            <select
              className="form-select"
              id="distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            >
              <option value="10">10 km</option>
              <option value="20">20 km</option>
              <option value="30">30 km</option>
              <option value="50">50 km</option>
              <option value="100">100 km</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">Code Postal</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Code Postal"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="minPrice" className="form-label">Prix Min</label>
            <input
              type="number"
              className="form-control"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Prix Min"
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="maxPrice" className="form-label">Prix Max</label>
            <input
              type="number"
              className="form-control"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Prix Max"
            />
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button type="submit" className="btn btn-dark m-1">Afficher les résultats</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;