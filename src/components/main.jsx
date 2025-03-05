import React from "react";

const Home = () => {
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
                Trouvez votre voiture idéale dès aujourd'hui !
              </h5>
              <p className="card-text fs-5 d-none d-sm-block">
                🚀 "Trouvez une voiture qui correspond à votre style et votre
                budget. Des prix compétitifs, un service rapide !"
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

export default Home;
