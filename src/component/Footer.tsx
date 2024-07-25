// import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

// const Footer = () => {
//   return (
//     <footer className="mt-20 bg-blue">
//       <div className="mx-auto max-w-screen-xl px-4 pt-1 pb-4 sm:px-6 lg:px-8">
//         <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
//           <div className="mx-auto max-w-sm lg:max-w-none">
//             <span className="mx-auto block w-fit lg:ml-0">
//               <img
//                 src="src/assets/aptech-logo.png"
//                 alt="Aptech Logo"
//                 className="pointer-events-none h-14"
//               />
//             </span>

//             <p className="mt-4 text-center text-white lg:w-5/6 lg:text-left lg:text-md">
//               IT is required in every industry. Today, the world is moving
//               towards automation of skills, an area in which IT is urgently
//               required. Enroll and get your skills now !!!
//             </p>

//             <div className="mt-6 flex justify-center gap-4 text-white lg:justify-start">
//               <a
//                 className="transition hover:text-yellow"
//                 href="https://twitter.com/AptechOtaEdu"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <span className="sr-only"> X </span>

//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5 bi bi-twitter-x"
//                   width="16"
//                   height="16"
//                   fill="currentColor"
//                   viewBox="0 0 16 16"
//                 >
//                   <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
//                 </svg>
//               </a>

//               <a
//                 className="transition hover:text-yellow"
//                 href="https://wa.me/message/5QKXQWL773YJA1"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <span className="sr-only"> WhatsApp </span>
//               </a>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
//             <div>
//               <strong className="font-jost text-md font-semibold uppercase tracking-wide text-yellow">
//                 More Info
//               </strong>

//               <nav className="mt-4 flex flex-col space-y-2 text-md text-white">
//                 <Link
//                   className="transition hover:text-white hover:underline hover:underline-offset-2"
//                   to="/"
//                   reloadDocument
//                 >
//                   {" "}
//                   Home{" "}
//                 </Link>
//                 <Link
//                   className="transition hover:text-white hover:underline hover:underline-offset-2"
//                   to="/about"
//                   reloadDocument
//                 >
//                   {" "}
//                   About{" "}
//                 </Link>
//                 <Link
//                   className="transition hover:text-white hover:underline hover:underline-offset-2"
//                   to="/gallery"
//                   reloadDocument
//                 >
//                   {" "}
//                   Gallery{" "}
//                 </Link>
//                 <Link
//                   className="transition hover:text-white hover:underline hover:underline-offset-2"
//                   to="/courses"
//                   reloadDocument
//                 >
//                   Courses
//                 </Link>
//                 <Link
//                   className="transition hover:text-white hover:underline hover:underline-offset-2"
//                   to="/contact"
//                   reloadDocument
//                 >
//                   Contact
//                 </Link>
//               </nav>
//             </div>

//             <div>
//               <strong className="font-jost text-md font-semibold uppercase tracking-wide text-yellow">
//                 Follow Us
//               </strong>

//               <nav className="mt-4 flex flex-col space-y-2 text-md text-white">
//                 <p className="transition">
//                   {" "}
//                   No 1, Joju bustop, ogbohu plaza, beside Gt bank, Ota ,Ogun
//                   state , Nigeria
//                 </p>
//               </nav>
//             </div>

//             <div>
//               <strong className="font-jost text-md font-semibold uppercase tracking-wide text-yellow">
//                 Contact
//               </strong>

//               <nav className="mt-4 flex flex-col space-y-1 text-sm text-white">
//                 <a className="transition" href="mailto:aptech.ota@gmail.com">
//                   {" "}
//                   <span className="font-semibold">
//                     Email:
//                   </span> aptech.ota@gmail.com{" "}
//                 </a>
//                 <div>
//                   <span className="font-semibold">Telephone:</span> <br />
//                   <a className="transition" href="tel:+2348137309622">
//                     +234 (0)813 730 9622 <br />
//                   </a>
//                   <a className="transition" href="tel:+2348107146343">
//                     +234 (0)810 714 6343{" "}
//                   </a>
//                 </div>
//                 <div className="transition">
//                   {" "}
//                   <span className="font-semibold">Office Hours:</span> <br /> Mon -
//                   Sat | 9:00am - 5:00pm GMT +1
//                 </div>
//               </nav>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 border-t border-white/10 pt-3">
//           <p className="text-center text-xs leading-relaxed text-white">
//             © Aptech Ota <span>{currentYear}</span>. All rights reserved.
//             <br />
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-lg-start bg-gray-200 text-gray-600 bg-blue">
      {/* Section: Social media */}
      <section className="flex items-center justify-between p-4 border-b border-gray-300">
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Right */}
        <div>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-gray-600">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="text-center text-md-start">
        {/* Grid row */}
        <div className="w-11/12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6 py-5 mx-auto text-start">
          {/* Grid column */}
          <div className="w-full col-span-3 lg:pe-14">
            {/* Content */}
            <img
              src="src/assets/aptech-logo.png"
              alt="Aptech Logo"
              className="w-40 mb-4"
            />
            <p>
              IT is required in every industry. Today, the world is moving
              towards automation of skills, an area in which IT is urgently
              required. Enroll and get your skills now !!! X WhatsApp
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="w-full mb-4">
            {/* Links */}
            <h6 className="uppercase font-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-gray-600">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Laravel
              </a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="w-full">
            {/* Links */}
            <h6 className="uppercase font-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-gray-600">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-gray-600">
                Help
              </a>
            </p>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="w-full">
            {/* Links */}
            <h6 className="uppercase font-bold mb-4">Contact</h6>
            <p className="flex items-center">
              <i className="fas fa-home mr-3"></i> New York, NY 10012, US
            </p>
            <p className="flex items-center">
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p className="flex items-center">
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p className="flex items-center">
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4 shadow-2xl">
        © Aptech Ota {currentYear}. All rights reserved
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;

