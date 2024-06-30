// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Header";
// import Footer from "./Footer";

// const Ajouter = () => {
//   const [data, setData] = useState({
//     Category: "",
//     Title: "",
//     Brief: "",
//     Image: "",
//     Description: "",
//   });

//   function handleChange(event) {
//     console.log(data);
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   function ajouterPost() {
//     if(!data.Category || !data.Title || !data.Brief || !data.Image || !data.Description )
//         alert("Fill All the Data !!!!!!!")
//     else{
//     axios
//       .post("http://localhost:3006/posts", data)
//       .then((res) => {
//         console.log(res);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//       alert("Done !!!!!!!")
//   }

//   function handleFile() {

//   }
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="text-center mt-5">
//           <h1>Ajouter Form</h1>
//         </div>
//         <div className="row">
//           <div className="col-lg-7 mx-auto">
//             <div className="card mt-2 mx-auto p-4 bg-light">
//               <div className="card-body bg-light">
//                 <div className="container">
//                   <form id="contact-form" role="form">
//                     <div className="controls">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_need">Category</label>
//                             <select
//                               id="Category"
//                               name="Category"
//                               value={data.Category}
//                               onChange={handleChange}
//                               className="form-control"
//                               required="required"
//                               data-error="Please specify your Category."
//                             >
//                               <option value="" disabled>
//                                 --Select Your Category--
//                               </option>
//                               <option>Breackfast</option>
//                               <option>Dinner</option>
//                               <option>Lunch</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_title">Title</label>
//                             <input
//                               id="Title"
//                               type="text"
//                               name="Title"
//                               value={data.Title}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Please enter the title"
//                               required="required"
//                               data-error="Title is required."
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_brief">Brief</label>
//                             <input
//                               id="Brief"
//                               type="text"
//                               name="Brief"
//                               value={data.Brief}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Please enter the Brief"
//                               required="required"
//                               data-error="Brief is required."
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_image">Image</label>
//                             <input
//                               type="file"
//                               name="Image"
//                               accept=".png, .jpg"
//                               onChange={handleChange}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-12">
//                           <div className="form-group">
//                             <label htmlFor="form_description">
//                               Description
//                             </label>
//                             <textarea
//                               id="Description"
//                               name="Description"
//                               value={data.Description}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Write your Description here."
//                               rows="4"
//                               required="required"
//                               data-error="Please, leave us a message."
//                             ></textarea>
//                           </div>
//                         </div>
//                         <div className="col-md-12" onClick={ajouterPost}>
//                           <input
//                             type="submit"
//                             className="btn btn-success btn-send pt-2 btn-block"
//                             value="Send Message"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             {/* /.8 */}
//           </div>
//           {/* /.row */}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Ajouter;





// import React, { useState } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./Header";
// import Footer from "./Footer";
// import env from "react-dotenv";

// // Function to handle file upload to Cloudinary
// const uploadFileToCloudinary = async (file) => {
//   const cloudName = env.REACT_APP_CLOUD_NAME; // replace with your Cloudinary cloud name
//   const uploadPreset = env.REACT_APP_PRESET_KEY; // replace with your Cloudinary upload preset

//   const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

//   const formData = new FormData();
//   formData.append('file', file);
//   formData.append('upload_preset', uploadPreset);

//   try {
//     const response = await axios.post(url, formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data; // The response contains the uploaded file details
//   } catch (error) {
//     console.error('Error uploading file to Cloudinary', error);
//     throw error;
//   }
// };

// const Ajouter = () => {
//   const [data, setData] = useState({
//     Category: "",
//     Title: "",
//     Brief: "",
//     Image: "",
//     Description: "",
//   });
//   const [file, setFile] = useState(null);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   async function ajouterPost(event) {
//     event.preventDefault();

//     if(!data.Category || !data.Title || !data.Brief || !file || !data.Description ) {
//       alert("Fill All the Data !!!!!!!");
//       return;
//     }

//     try {
//       const uploadResult = await uploadFileToCloudinary(file);
//       const imageUrl = uploadResult.secure_url;
      
//       const postData = { ...data, Image: imageUrl };

//       const res = await axios.post("http://localhost:3006/posts", postData);
//       console.log(res);
//       alert("Done !!!!!!!");
//       // Navigate to another page or reset form as needed
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('Error uploading file');
//     }
//   }

//   function handleFile(event) {
//     setFile(event.target.files[0]);
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <div className="text-center mt-5">
//           <h1>Ajouter Form</h1>
//         </div>
//         <div className="row">
//           <div className="col-lg-7 mx-auto">
//             <div className="card mt-2 mx-auto p-4 bg-light">
//               <div className="card-body bg-light">
//                 <div className="container">
//                   <form id="contact-form" role="form" onSubmit={ajouterPost}>
//                     <div className="controls">
//                       <div className="row">
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_need">Category</label>
//                             <select
//                               id="Category"
//                               name="Category"
//                               value={data.Category}
//                               onChange={handleChange}
//                               className="form-control"
//                               required="required"
//                               data-error="Please specify your Category."
//                             >
//                               <option value="" disabled>
//                                 --Select Your Category--
//                               </option>
//                               <option>Breakfast</option>
//                               <option>Dinner</option>
//                               <option>Lunch</option>
//                             </select>
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_title">Title</label>
//                             <input
//                               id="Title"
//                               type="text"
//                               name="Title"
//                               value={data.Title}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Please enter the title"
//                               required="required"
//                               data-error="Title is required."
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_brief">Brief</label>
//                             <input
//                               id="Brief"
//                               type="text"
//                               name="Brief"
//                               value={data.Brief}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Please enter the Brief"
//                               required="required"
//                               data-error="Brief is required."
//                             />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <div className="form-group">
//                             <label htmlFor="form_image">Image</label>
//                             <input
//                               type="file"
//                               name="Image"
//                               accept=".png, .jpg"
//                               onChange={handleFile}
//                               className="form-control"
//                               required="required"
//                               data-error="Please upload an image."
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="row">
//                         <div className="col-md-12">
//                           <div className="form-group">
//                             <label htmlFor="form_description">Description</label>
//                             <textarea
//                               id="Description"
//                               name="Description"
//                               value={data.Description}
//                               onChange={handleChange}
//                               className="form-control"
//                               placeholder="Write your Description here."
//                               rows="4"
//                               required="required"
//                               data-error="Please, leave us a message."
//                             ></textarea>
//                           </div>
//                         </div>
//                         <div className="col-md-12">
//                           <input
//                             type="submit"
//                             className="btn btn-success btn-send pt-2 btn-block"
//                             value="Send Message"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//             {/* /.8 */}
//           </div>
//           {/* /.row */}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Ajouter;




import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Header";
import Footer from "./Footer";

// Function to handle file upload to Cloudinary
const uploadFileToCloudinary = async (file) => {
  const cloudName =  "dt6uyjgxm"
  const uploadPreset = "l7qd30i7"

  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data; // The response contains the uploaded file details
  } catch (error) {
    console.error("Error uploading file to Cloudinary", error);
    throw error;
  }
};

const Ajouter = () => {
  const [data, setData] = useState({
    Category: "",
    Title: "",
    Brief: "",
    Image: "",
    Description: "",
  });
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  const ajouterPost = async (event) => {
    event.preventDefault();

    if (
      !data.Category ||
      !data.Title ||
      !data.Brief ||
      !file ||
      !data.Description
    ) {
      alert("Fill All the Data !!!!!!!");
      return;
    }

    try {
      const uploadResult = await uploadFileToCloudinary(file);
      const imageUrl = uploadResult.secure_url;

      const postData = { ...data, Image: imageUrl };

      const res = await axios.post("http://localhost:3006/posts", postData);
      console.log(res);
      alert("Done !!!!!!!");
      // Navigate to another page or reset form as needed
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="text-center mt-5">
          <h1>Ajouter Form</h1>
        </div>
        <div className="row my-4">
          <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
              <div className="card-body bg-light">
                <div className="container">
                  <form id="contact-form" role="form" onSubmit={ajouterPost}>
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
                              <option>Breakfast</option>
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
                              onChange={handleFile}
                              className="form-control"
                              required="required"
                              data-error="Please upload an image."
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
                        <div className="col-md-12">
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
