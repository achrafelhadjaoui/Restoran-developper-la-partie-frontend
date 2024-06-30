import { theContext } from "./App";
import React, { useContext } from 'react';

const RestaurantSection = () => {

  let context = useContext(theContext);
    return (
      <section className="d-flex justify-content-around align-items-center p-5 flex-column flex-md-row bg-light">
      <div>
        <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="rounded-circle" alt="Cinque Terre" style={{ maxWidth: '400px', height: '400px', objectFit: 'cover' }} />
      </div>
      <div className="text-center text-md-left">
        <h1>The Name of the Restaurant</h1>
        <p>Une petite description</p>
        <button className="btn btn-primary" onClick={() => context.setCurrent("About")}>Learn more</button>
      </div>
    </section>
    );
  };

  export default RestaurantSection;