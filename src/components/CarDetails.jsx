import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === id);

  if (!car) {
    return <div>Voiture non trouvée</div>;
  }

  return (
    <div className="container my-3 py-3">
      <h2 className="display-5 text-center">{car.make} {car.model}</h2>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <img
            className="img-fluid"
            src={car.image}
            alt={car.model}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item"><strong>Marque:</strong> {car.make}</li>
            <li className="list-group-item"><strong>Modèle:</strong> {car.model}</li>
            <li className="list-group-item"><strong>Année:</strong> {car.year}</li>
            <li className="list-group-item"><strong>Type de carburant:</strong> {car.fuel_type}</li>
            <li className="list-group-item"><strong>Prix:</strong> ${car.price}</li>
            <li className="list-group-item"><strong>Kilométrage:</strong> {car.mileage} km</li>
            <li className="list-group-item"><strong>Transmission:</strong> {car.transmission}</li>
            <li className="list-group-item"><strong>Couleur:</strong> {car.color}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;