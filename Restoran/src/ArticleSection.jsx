import React, {useContext} from 'react';
import { theContext } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Header';
import Footer from './Footer';


const ArticleSection = () => {
    const context = useContext(theContext)


  return (
    <>
    <Navbar/>
    <div className="container my-4">
      <section className="mb-5">
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300x200" className="img-fluid" alt="Article 1 Image" />
          </div>
          <div className="col-md-8">
            <h2>{context.selectedArticle.Title}</h2>
            <p><strong>Category:</strong> {context.selectedArticle.Category}</p>
            {/* <p><strong>Brief:</strong> This is a brief description of article 1.</p> */}
            <p><strong>Description:</strong> {context.selectedArticle.Description}</p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default ArticleSection;
