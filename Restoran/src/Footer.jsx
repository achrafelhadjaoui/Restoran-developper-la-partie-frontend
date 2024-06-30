const Footer = () => {
  return (
    //       <footer className="footer">
    //         <div className="bg-light py-3 py-md-5 py-xl-8 border-top border-light-subtle">
    //           <div className="container overflow-hidden">
    //             <div className="row gy-3 gy-md-5 gy-xl-0 align-items-sm-center">
    //               <div className="col-xs-12 col-sm-6 col-xl-3 order-0 order-xl-0">
    //                 <div className="footer-logo-wrapper text-center text-sm-start">
    //                   <a href="#!">
    //                     <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57" />
    //                   </a>
    //                 </div>
    //               </div>
    //               <div className="col-xs-12 col-xl-6 order-2 order-xl-1">
    //                 <ul className="nav justify-content-center">
    //                   <li className="nav-item">
    //                     <a className="nav-link link-secondary px-2 px-md-3" href="#!">About</a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a className="nav-link link-secondary px-2 px-md-3" href="#!">Contact</a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a className="nav-link link-secondary px-2 px-md-3" href="#!">Advertise</a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a className="nav-link link-secondary px-2 px-md-3" href="#!">Terms</a>
    //                   </li>
    //                   <li className="nav-item">
    //                     <a className="nav-link link-secondary px-2 px-md-3" href="#!">Privacy</a>
    //                   </li>
    //                 </ul>
    //               </div>
    //               <div className="col-xs-12 col-sm-6 col-xl-3 order-1 order-xl-2">
    //                 <div className="social-media-wrapper">
    //                   <ul className="list-unstyled m-0 p-0 d-flex justify-content-center justify-content-sm-end">
    //                     <li className="me-3">
    //                       <a href="#!" className="link-dark link-opacity-75-hover">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
    //                           <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
    //                         </svg>
    //                       </a>
    //                     </li>
    //                     <li className="me-3">
    //                       <a href="#!" className="link-dark link-opacity-75-hover">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
    //                           <path d="M8.051 1.999h.072c1.74.01 5.47.087 6.553.544.897.376 1.603 1.431 1.724 2.856.254 3.043.213 4.836-.03 5.76-.162.636-.575 1.21-1.065 1.53-.574.365-1.488.604-2.718.687C11.733 13.949 9.793 14 8.051 14h-.072c-1.742-.01-3.682-.052-5.088-.125-1.23-.083-2.144-.322-2.718-.687-.49-.32-.903-.894-1.065-1.53-.243-.924-.284-2.717-.03-5.76.121-1.425.827-2.48 1.724-2.856 1.083-.457 4.813-.534 6.553-.544zM7.646 5.304v5.391l4.734-2.695-4.734-2.696z" />
    //                         </svg>
    //                       </a>
    //                     </li>
    //                     <li className="me-3">
    //                       <a href="#!" className="link-dark link-opacity-75-hover">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
    //                           <path d="M5.026 15c6.038 0 9.341-5.002 9.341-9.334 0-.14 0-.282-.008-.422A6.68 6.68 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.443-1.817 6.553 6.553 0 0 1-2.087.797A3.286 3.286 0 0 0 7.88 6.03a9.325 9.325 0 0 1-6.766-3.429 3.289 3.289 0 0 0 1.016 4.381A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.114 3.23 3.23 0 0 1-.615-.057 3.283 3.283 0 0 0 3.066 2.278A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
    //                         </svg>
    //                       </a>
    //                     </li>
    //                     <li className="me-3">
    //                       <a href="#!" className="link-dark link-opacity-75-hover">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
    //                           <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H3.255v7.225h1.688zm.044-8.29a1.033 1.033 0 1 1 0-2.066 1.033 1.033 0 0 1 0 2.066zm-1.625 8.29h1.688v-7.225H3.362v7.225zm5.599-3.972v-.007c-.743 0-1.299.483-1.299 1.182v3.565h1.685v-3.284c0-.19.014-.38.085-.531.186-.447.614-.785 1.182-.785.836 0 1.182.592 1.182 1.462v3.138H14V9.84c0-2.082-1.11-3.058-2.588-3.058-1.205 0-1.744.687-2.042 1.172h-.044v-.997H8.96c.021.639 0 7.23 0 7.23h1.688v-3.972h-.07z" />
    //                         </svg>
    //                       </a>
    //                     </li>
    //                     <li className="me-3">
    //                       <a href="#!" className="link-dark link-opacity-75-hover">
    //                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
    //                           <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.952L0 4.697zm6.761 4.396L16 4.697v7.104l-6.761-3.708zm-.457.688l-5.468 3.728A2 2 0 0 0 2 14h12a2 2 0 0 0 1.164-.387l-5.468-3.728L8 10.586l-1.696-1.205z" />
    //                         </svg>
    //                       </a>
    //                     </li>
    //                   </ul>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </footer>
    //     );
    //   };

    <footer className="footer bg-light py-3 py-md-5 border-top border-light-subtle">
      <div className="container overflow-hidden">
        <div className="row gy-3 gy-md-5 align-items-center">
          <div className="col-xs-12 col-sm-6 col-xl-3 text-center text-sm-start">
            <a href="#!">
              <img
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                alt="Restoran Logo"
                width="175"
                height="57"
              />
            </a>
          </div>
          <div className="col-xs-12 col-xl-6 text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link link-secondary px-2 px-md-3" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary px-2 px-md-3" href="#!">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary px-2 px-md-3" href="#!">
                  Advertise
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary px-2 px-md-3" href="#!">
                  Terms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-secondary px-2 px-md-3" href="#!">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-6 col-xl-3 text-center text-sm-end">
            <ul className="list-unstyled d-flex justify-content-center justify-content-sm-end">
              <li className="me-3">
                <a href="#!" className="link-dark link-opacity-75-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
              <li className="me-3">
                <a href="#!" className="link-dark link-opacity-75-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-youtube"
                    viewBox="0 0 16 16"
                  ></svg>
                  {/* Repeat similar blocks for other social icons */}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center text-md-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
