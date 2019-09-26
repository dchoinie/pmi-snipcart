import React, { Component } from "react"
import "./bootstrap.min.css"
import Logo from "../images/logo.png"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCartArrowDown,
  FaBars,
} from "react-icons/fa"
import { useStaticQuery, Link } from "gatsby"

export default class header extends Component {
  state = {
    navbarOpen: false,
    css: "collaplse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/membership",
        text: "membership",
      },
      {
        id: 3,
        path: "/services",
        text: "services",
      },
      {
        id: 4,
        path: "/classes",
        text: "classes",
      },
      {
        id: 5,
        path: "/about",
        text: "about",
      },
      {
        id: 6,
        path: "/contact",
        text: "contact",
      },
    ],
  }

  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({ navbarOpen: false, css: "collapse navbar-collapse" })
      : this.setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
        })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <FaBars />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav w-full justify-end px-12">
            <li className="socials-nav mx-1">
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="socials-nav mx-1">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="socials-nav mx-1">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li className="socials-nav">
              <a href="#">
                <FaEnvelope />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav w-full justify-end px-12">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
            <li className="nav-item self-center">
              <FaCartArrowDown className="cart-icon" />
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
