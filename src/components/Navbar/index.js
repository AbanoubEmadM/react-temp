import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection , Logo , LogoText , ListMenu , ListItem , ListA} from './style.js'


const Navbar = () => {
    return(
      <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>
          <ListMenu>
              <ListItem><Link to="/">Home</Link></ListItem>
              <ListItem><ListA to="#">Work</ListA></ListItem>
              <ListItem><ListA to="#">Portfolio</ListA></ListItem>
              <ListItem><ListA to="#">Resume</ListA></ListItem>
              <ListItem><ListA to="#">About</ListA></ListItem>
              <ListItem><Link to="/contact">Contact</Link></ListItem>
          </ListMenu>
          
      </div>
      
  </NavbarSection>
)
}
export default Navbar;