
// import React from "react"
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import './Product.css';
// // import ReviewComponent from "./review";


// export default function Product(){
// return(


// <div className="Product">
// <router className="routerclass">
//    <Link to="/review"><h3>price:30rs</h3><img src="src/assets/tea.png" ></img></Link>

   
//   <Link to="/review"><h3>price:30rs</h3><img src="src/assets/buiscuits.png" ></img></Link>
  
//   <Link to="/review"><h3>price:30rs</h3><img src="src/assets/images/coffee.png"></img></Link>
  
//   <Link to="/review"><h3>price:30rs</h3><img src="src/assets/images/masalachai.png"></img></Link> 
//   <routes>

//   </routes>


// </router>
// </div>

// )





// }
// import React from "react";
// import { Link, Router } from "react-router-dom";
// import './Product.css';

// export default function Product() {
//   return (
   
//       <Router>
//         <Link to="/review">
          
//           <img src="src/assets/tea.png" alt="Tea" />
//         </Link>

//         <Link to="/review" >
          
//           <img src="src/assets/buiscuits.png" alt="Biscuits" />
//         </Link>

//         <Link to="/review" >
          
//           <img src="src/assets/images/coffee.png" alt="Coffee" />
//         </Link>

//         <Link to="/review" >
         
//           <img src="src/assets/images/masalachai.png" alt="Masala Chai" />
//         </Link>
       
//         </Router>
    
        
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

export default function Product() {
  return (
    <div className="product-container">
      <Link to="/review" className="product-card">
        <img src="src/assets/tea.png" alt="Tea" />
        <h3>Price: ₹30</h3>
      </Link>

      <Link to="/review" className="product-card">
        <img src="src/assets/buiscuits.png" alt="Biscuits" />
        <h3>Price: ₹30</h3>
      </Link>

      <Link to="/review" className="product-card">
        <img src="src/assets/images/coffee.png" alt="Coffee" />
        <h3>Price: ₹30</h3>
      </Link>

      <Link to="/review" className="product-card">
        <img src="src/assets/images/masalachai.png" alt="Masala Chai" />
        <h3>Price: ₹30</h3>
      </Link>
    </div>
  );
}
