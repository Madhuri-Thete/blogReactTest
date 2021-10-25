
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, 
  Route,Switch,
  NavLink
} from "react-router-dom";
import { Link } from "react-router-dom";
const Header = ()=>{
	return(
			<>
<section className="Navbar_holder sidespace ">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-light nopadding" data-toggle="sticky-onscroll">
      
      <Link className="navbar-brand" to="/"><img src="assets/images/mini-logo.png" className="img-fluid d-block mx-auto"/></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="mr-auto"></div>
          <ul className="navbar-nav">
            
              <li className="nav-item power-off"> 
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item"> 
                <NavLink to="/createpost" className="nav-link createbtn">Create a Post</NavLink>
              </li>
              
          </ul>
         
        
      </div>
    </nav>
  </div>
</section>
			</>
		)
}
export default Header;