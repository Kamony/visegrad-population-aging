import React from 'react'
import {NavbarItems} from "./Navbar";

const Footer = class extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="footer has-background-grey-dark">
        <div className="content has-text-centered has-text-white-bis">
            {/*<NavbarItems/>*/}
            <a className="button is-small is-primary" href={"/admin"} style={{marginBottom: 20}}>Admin</a>
            <div className="has-text-white-bis">created by Kamony</div>
            <div className="has-text-white-bis">&copy; {currentYear}</div>

        </div>
      </footer>
    )
  }
}

export default Footer
