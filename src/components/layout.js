import React from "react"
import "./bootstrap.min.css"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
