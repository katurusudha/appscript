import '../App.css';
import React from 'react';
import { FaCartPlus, FaChevronDown, FaHeart, FaSistrix, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Header() {
  return (
//     <header className="navbar">
//     <h1 className="logo">Food Delivery App</h1>
//     <nav>
//       <ul className="nav-links">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/restaurants">Restaurants</Link>
//         </li>
//         <li>
//           <Link to="/cart">Cart</Link>
//         </li>
//         <li>
//           <Link to="/checkout">Checkout</Link>
//         </li>
//       </ul>
//     </nav>
//   </header>
<>
<div className="nav-header">
    <img src="" alt="logo" className="header-logo" />
    <h5> LOGO</h5>
    <div className="header-icons" >
        <FaSistrix  className="nav-image"/>
        <FaHeart className="nav-image"/>
        <FaCartPlus className="nav-image" />
        <FaUserCircle  className="nav-image" /> 
        <p className="text">ENG</p>
        
        <FaChevronDown className="eng-arrow" />
       
    
   </div>
</div>
<div className="nav2">
    <navLink className="nav-item" >SHOP</navLink>
    <navLink className="nav-item"  >SKILLS</navLink>
    <navLink  className="nav-item" >STORIES</navLink>
    <navLink className="nav-item"  >ABOUT</navLink>
    <navLink  className="nav-item" >CONTACT US</navLink>
</div>
<hr />
<div className="heading">
    <h1>DISCOVER OUR PRODUCTS</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi elementu dolor</p>
</div>

</>
);
}



export default Header;

  
