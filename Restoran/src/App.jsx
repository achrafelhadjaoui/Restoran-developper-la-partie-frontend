import { useState, createContext, useEffect } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
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
import ArticleSection from './ArticleSection';
import VueAll from './VueAll';

export const theContext = createContext()

const App = () => {

  let [currentState, setCurrent] = useState("Home")
  let [data, setData] = useState([])
  let [selectedArticle, setSelectedArticle]= useState("")

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
      <BrowserRouter>
      <theContext.Provider value={{currentState,setCurrent, data, selectedArticle, setSelectedArticle}}>
        {currentState === "Home" && <Home />}
        {currentState === "About" && <AboutSection/>}
        {currentState === "Ajouter" && <Ajouter/>}
        {currentState === "Article" && <ArticleSection/>}
        {currentState === "VueAll" && <VueAll/>}

        {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/ajouter" element={<Ajouter />} />
            <Route path="/article" element={<ArticleSection />} />
            <Route path="/vueall" element={<VueAll />} />
        </Routes> */}
      </theContext.Provider>
      </BrowserRouter>

     

     
    </>
);
};

export default App;
