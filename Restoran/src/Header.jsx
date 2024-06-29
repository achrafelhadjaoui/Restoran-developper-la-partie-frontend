import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useContext} from 'react';
import { theContext } from './App';

const Navbar = () => {
    let context = useContext(theContext);
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light mx-5 ">
      <a className="navbar-brand" href="#">
        <img src="https://via.placeholder.com/50" alt="Logo" style={{ width: '50px', height: '50px' }} />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active" onClick={()=>{context.setCurrent("Home")}}>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item" onClick={()=>{context.setCurrent("About")}}>
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item" onClick={()=>{context.setCurrent("Recipies")}}>
            <a className="nav-link" href="#">Recipies</a>
          </li>
          <li className="nav-item" onClick={()=>{context.setCurrent("Ajouter")}}>
            <a className="nav-link" href="#">Ajouter</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
