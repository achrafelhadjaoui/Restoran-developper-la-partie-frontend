import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Header";
import Footer from "./Footer";

const Ajouter = () => {
    const [data, setData] = useState({
        Category: "",
        Title: "",
        Brief: "",
        Image: "",
        Description: ""
    });

    function handleChange(event) {
        console.log(data)
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function ajouterPost() {
    axios
      .post("http://localhost:3006/posts", data)
      .then((res) => {
        console.log(res)
        navigate("/");
      })
      .catch((err) => console.log(err));
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="text-center mt-5">
                    <h1>Ajouter Form</h1>
                </div>
                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <div className="card mt-2 mx-auto p-4 bg-light">
                            <div className="card-body bg-light">
                                <div className="container">
                                    <form id="contact-form" role="form">
                                        <div className="controls">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_need">Category</label>
                                                        <select
                                                            id="Category"
                                                            name="Category"
                                                            value={data.Category}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            required="required"
                                                            data-error="Please specify your Category."
                                                        >
                                                            <option value="" disabled>
                                                                --Select Your Category--
                                                            </option>
                                                            <option>Breackfast</option>
                                                            <option>Dinner</option>
                                                            <option>Lunch</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_title">Title</label>
                                                        <input
                                                            id="Title"
                                                            type="text"
                                                            name="Title"
                                                            value={data.Title}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            placeholder="Please enter the title"
                                                            required="required"
                                                            data-error="Title is required."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_brief">Brief</label>
                                                        <input
                                                            id="Brief"
                                                            type="text"
                                                            name="Brief"
                                                            value={data.Brief}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            placeholder="Please enter the Brief"
                                                            required="required"
                                                            data-error="Brief is required."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="form_image">Image</label>
                                                        <input
                                                            type="file"
                                                            name="Image"
                                                            accept=".png, .jpg"
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label htmlFor="form_description">Description</label>
                                                        <textarea
                                                            id="Description"
                                                            name="Description"
                                                            value={data.Description}
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            placeholder="Write your Description here."
                                                            rows="4"
                                                            required="required"
                                                            data-error="Please, leave us a message."
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12" onClick={ajouterPost}>
                                                    <input
                                                        type="submit"
                                                        className="btn btn-success btn-send pt-2 btn-block"
                                                        value="Send Message"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* /.8 */}
                    </div>
                    {/* /.row */}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Ajouter;
