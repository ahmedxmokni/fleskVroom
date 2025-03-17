import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = ({ cars }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error] = useState(null);

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Ajouté au panier");
  };

  useEffect(() => {
    // Données fictives pour l'affichage
    const demoData = [
      {
        id: "1",
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        fuel_type: "Gasoline",
        price: 20000,
        mileage: 15000,
        transmission: "Automatic",
        color: "Blue",
        image: "https://w7.pngwing.com/pngs/608/499/png-transparent-2016-toyota-corolla-hatchback-compact-car-continuously-variable-transmission-blue-car-compact-car-sedan-car-thumbnail.png"
      },
      {
        id: "2",
        make: "Honda",
        model: "Civic",
        year: 2019,
        fuel_type: "Gasoline",
        price: 18000,
        mileage: 20000,
        transmission: "Manual",
        color: "Red",
        image: "https://w7.pngwing.com/pngs/801/997/png-transparent-2017-honda-civic-2018-honda-civic-honda-city-honda-today-honda-compact-car-glass-sedan-thumbnail.png"
      },
      {
        id: "3",
        make: "Tesla",
        model: "Model 3",
        year: 2021,
        fuel_type: "Electric",
        price: 35000,
        mileage: 5000,
        transmission: "Automatic",
        color: "White",
        image: "https://w7.pngwing.com/pngs/177/240/png-transparent-tesla-model-3-tesla-motors-car-electric-vehicle-tesla-model-3-compact-car-sedan-performance-car-thumbnail.png"
      },
      {
        id: "4",
        make: "Ford",
        model: "Mustang",
        year: 2021,
        fuel_type: "Gasoline",
        price: 30000,
        mileage: 10000,
        transmission: "Automatic",
        color: "Black",
        image: "https://w7.pngwing.com/pngs/258/287/png-transparent-2015-ford-mustang-2018-ford-mustang-2016-ford-mustang-car-tuning-car-performance-car-vehicle-thumbnail.png"
      },
      {
        id: "5",
        make: "Chevrolet",
        model: "Camaro",
        year: 2018,
        fuel_type: "Gasoline",
        price: 25000,
        mileage: 25000,
        transmission: "Manual",
        color: "Yellow",
        image: "https://w7.pngwing.com/pngs/557/274/png-transparent-chevrolet-camaro-car-desktop-automotive-design-car-computer-car-performance-car-thumbnail.png"
      }
    ];

    setData(demoData);
    setFilter(demoData);
    setLoading(false);
  }, []);

  const Loading = () => (
    <div className="text-center py-5">
      <Skeleton height={40} width={560} />
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <Skeleton height={300} />
          </div>
        ))}
      </div>
    </div>
  );

  const filterProduct = (category) => {
    if (category === "Toutes") {
      setFilter(data);
    } else {
      const updatedList = data.filter((car) => car.type === category);
      setFilter(updatedList);
    }
  };

  const ShowProducts = () => (
    <>
      <div className="buttons text-center py-4">
        {["Toutes", "SUV", "Sedan", "Truck", "Electric"].map((category) => (
          <button
            key={category}
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row">
        {filter.length > 0 ? filter.map((car) => (
          <div key={car.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={car.image || "https://via.placeholder.com/300"}
                alt={car.model}
                height={200}
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <p className="card-text">{car.year} - {car.fuel_type}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">
                  {car.price ? `$${car.price}` : "Prix sur demande"}
                </li>
              </ul>
              <div className="card-body">
                <Link to={"/product/" + car.id} className="btn btn-dark m-1">
                  Acheter Maintenant
                </Link>
                <button className="btn btn-dark m-1" onClick={() => addProduct(car)}>
                  Ajouter au Panier
                </button>
              </div>
            </div>
          </div>
        )) : <p className="text-center">Aucune voiture trouvée</p>}
      </div>
    </>
  );

  return (
    <div className="container my-3 py-3">
      <h2 className="display-5 text-center">Dernières Voitures</h2>
      <hr />
      {error ? <p className="text-center text-danger">{error}</p> : loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default Products;