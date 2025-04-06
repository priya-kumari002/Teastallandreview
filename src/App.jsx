
// import React from 'react';
// import { HashRouter  as Router, Routes, Route, Link } from 'react-router-dom';

// import Home from "./components/Home";
// import About from "./components/About";
// import Product from "./components/Products";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ReviewComponent from "./components/review";

// import './App.css';


// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <nav className="navbar">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Items</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <div className="content">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/products" element={<Product />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/review" element={<ReviewComponent />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReviewComponent from "./components/review";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Items</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/review">Reviews</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/review" element={<ReviewComponent />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
  
}

export default App;
