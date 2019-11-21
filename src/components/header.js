import React, { Component } from "react"
import { Navbar } from "react-bootstrap"
import "./bootstrap.min.css"
import Img from "gatsby-image"
import Logo from "../images/logo.png"
import { FaCartArrowDown, FaBars } from "react-icons/fa"
import { useStaticQuery, Link } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 225) {
            src
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="flex"
      style={{ backgroundColor: "#fff" }}
    >
      <Link to="/">
        <Img fixed={data.logo.childImageSharp.fixed} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        // style={{ border: "1px solid blue" }}
        className="flex"
      >
        <ul
          className="flex flex-col lg:flex-row text-right w-full justify-end mb-0"
          // style={{ border: "1px solid green" }}
        >
          <li>
            <Link to="/membership" className="purple nav-link text-xl">
              Membership
            </Link>
          </li>
          <li>
            <Link to="/" className="purple nav-link text-xl">
              Services
            </Link>
          </li>
          <li>
            <Link to="/" className="purple nav-link text-xl">
              Classes
            </Link>
          </li>
          <li>
            <Link to="/" className="purple nav-link text-xl">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="purple nav-link text-xl">
              Contact
            </Link>
          </li>
          <li className="self-end lg:self-center">
            <FaCartArrowDown className="text-2xl cart-icon" />
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  )
}
