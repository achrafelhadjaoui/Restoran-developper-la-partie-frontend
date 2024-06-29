import { useState, createContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Navbar from './Header';
import CardSection from './AllCards';
import Footer from './Footer';
import SubscribeSection from './Subscribe';
import RestaurantSection from './RetoranSection';
import Ajouter from './Ajouter';
import AboutSection from './About';
import Home from './Home';

export const theContext = createContext()

const App = () => {

  let [currentState, setCurrent] = useState("Home")
  let [data, setData] = useState([])

  useEffect(() => {
    // Fetch initial data here
    axios.get("http://localhost:3006/posts")
      .then(response => {
        setData(response.data);
        //setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        //setIsLoading(false);
      });
  }, []);

  return(
    <>

      <theContext.Provider value={{currentState,setCurrent, data}}>
        {currentState === "Home" && <Home />}
        {currentState === "About" && <AboutSection/>}
        {currentState === "Ajouter" && <Ajouter/>}
      </theContext.Provider>

     

     
    </>
);
};

export default App;
