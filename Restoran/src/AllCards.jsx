// import React, { useContext } from "react";
// import { theContext } from "./App";

// const CardSection = () => {
//   let context = useContext(theContext);
//   const firstTenItems = context.data.slice(0, 10);

//   return (
//     <section className="mx-5">
//       <div className="text-center my-3">
//         <h2>Browse All</h2>
//       </div>

//       <div className="row">
//         {firstTenItems.map((e, index) => {
//           console.log(e);
//           <div
//             className="col-md-3 col-sm-6 mb-3"
//             key={index}
//             onClick={() => {
//               context.setCurrent("Article"), context.setSelectedArticle(e);
//             }}
//           >
//             <div
//               className="card"
//               style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
//             >
//               <img
//                 src={e.Image}
//                 className="card-img-top"
//                 alt="Dish 6"
//                 style={{
//                   borderTopLeftRadius: "10px",
//                   borderTopRightRadius: "10px",
//                 }}
//               />
//               <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
//                 <h5
//                   className="card-category"
//                   style={{
//                     fontSize: "0.9rem",
//                     fontWeight: "bold",
//                     textTransform: "uppercase",
//                     color: "#6c757d",
//                   }}
//                 >
//                   {e.Category}
//                 </h5>
//                 <h5 className="card-title" style={{ color: "#343a40" }}>
//                   {e.Title}
//                 </h5>
//                 <p className="card-text" style={{ color: "#6c757d" }}>
//                   {e.Brief}
//                 </p>
//               </div>
//             </div>
//           </div>
//         })
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-auto my-2">
//               <button className="btn btn-primary">Vue All</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CardSection;


import React, { useContext } from "react";
import { theContext } from "./App";

const CardSection = () => {
  let context = useContext(theContext);
  const firstTenItems = context.data.slice(0, 10);

  return (
    <section className="mx-5">
      <div className="text-center my-3">
        <h2>Browse All</h2>
      </div>

      <div className="row">
        {firstTenItems.map((e, index) => {
          console.log(e);
          return (
            <div
              className="col-md-3 col-sm-6 mb-3"
              key={index}
              onClick={() => {
                context.setCurrent("Article");
                context.setSelectedArticle(e);
              }}
            >
              <div
                className="card"
                style={{ border: "1px solid #e0e0e0", borderRadius: "10px" }}
              >
                <img
                  src={e.Image}
                  className="card-img-top"
                  alt="Dish 6"
                  style={{
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />
                <div className="card-body" style={{ backgroundColor: "#f8f9fa" }}>
                  <h5
                    className="card-category"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      color: "#6c757d",
                    }}
                  >
                    {e.Category}
                  </h5>
                  <h5 className="card-title" style={{ color: "#343a40" }}>
                    {e.Title}
                  </h5>
                  <p className="card-text" style={{ color: "#6c757d" }}>
                    {e.Brief}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto my-2">
            <button className="btn btn-primary">View All</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
