import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'
import {NavbarItems} from "./Navbar";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-dark">
        <div className="content has-text-centered">
          <div className="container">
            <div>created by Kamony copy</div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
