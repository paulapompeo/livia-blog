import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { User, Briefcase, Feather, GitHub, Archive, Home } from 'react-feather'

import {NavbarElement, NavbarList, NavbarLogo} from './style'

const Navbar = ({ siteTitle }) => (
  <nav>
    <div className="container">
      <NavbarElement>
          <NavbarLogo>
            <h3>
              <Link to="/">
                <span className="align-middle"> {siteTitle} </span>
              </Link>
            </h3>
          </NavbarLogo> 
          <div className="main-navigation">
            <NavbarList>
              <li><Link to="/" className="lined-link" activeClassName="active"> <Home /> <span> Home </span> </Link></li> 
              <li><Link to="/about" className="lined-link" activeClassName="active"> <User /> <span> About </span> </Link></li> 
              <li><Link to="/research" className="lined-link" activeClassName="active"> <Archive /> <span> Research </span> </Link></li> 
              <li><Link to="/teaching" className="lined-link" activeClassName="active"> <Briefcase /> <span> Teaching </span> </Link></li> 
              {/* <li><Link to="/repositories" className="lined-link" activeClassName="active"> <GitHub /> <span> Github </span> </Link></li>   */}
              {/* <li><Link to="/works" className="lined-link" activeClassName="active"> <Briefcase /> <span> Portfolio </span> </Link></li>   */}
              {/* <li><Link to="/news" className="lined-link" activeClassName="active"> <Feather /> <span> News </span> </Link></li> */}
            </NavbarList>
          </div>
      </NavbarElement>
    </div>
  </nav>
)

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
