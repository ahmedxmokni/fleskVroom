import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./components/Products";
import CarDetails from "./components/CarDetails";
import Product from "./pages/Product";

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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Products cars={demoData} />
        </Route>
        <Route path="/car/:id">
          <Product cars={demoData} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;