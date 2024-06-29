import React, { useContext } from 'react';
import { theContext } from './App';

const CardSection = () => {
  let context = useContext(theContext);

  return (
    <section className="mx-5">
      
          <div className="text-center my-3">
            <h2>Title</h2>
          </div>
          
          <div className="row">
          {context.data.map((e, index) => (
            <div className="col-md-3 col-sm-6 mb-3">
              <div className="card" style={{ border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                <img 
                  src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" 
                  className="card-img-top" 
                  alt="Dish 6" 
                  style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} 
                />
                <div className="card-body" style={{ backgroundColor: '#f8f9fa' }}>
                  <h5 className="card-category" style={{ fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', color: '#6c757d' }}>Category 6</h5>
                  <h5 className="card-title" style={{ color: '#343a40' }}>Dish Name 6</h5>
                  <p className="card-text" style={{ color: '#6c757d' }}>A brief description of Dish 6.</p>
                </div>
              </div>
            </div>
    
          ))}
          </div>

    </section>
  );
};

export default CardSection;

