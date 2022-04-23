import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Nav

} from "reactstrap";



const mapStateToProps = state => {
  return {
    token: state.token,
  }
}

const Menu = (props) => {

  const [isNavOpen, setIsNavOpen] = useState(false);



  let links = null;
  if (props.token === null) {
    links = (

      <>
        
        <li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>


      </>

    )
  } else {
    links = (
      <>

        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/logout">Log out</Link></li>


      </>
    )
  }



  const handleNav = () => {
    console.log("clicked");
    setIsNavOpen(!isNavOpen);
  };
  return (
    <Navbar
      color="dark"
      dark expand="sm">
     
        <NavbarBrand href="/">
          StyleSense
        </NavbarBrand>
  
      <NavbarToggler
      onClick={handleNav} 
      />


        
      <Collapse navbar isOpen={isNavOpen}  >
        <Nav navbar className="ml-3">
        {links}
        
        </Nav>
      </Collapse>
    </Navbar>

  )
}

export default connect(mapStateToProps)(Menu);




