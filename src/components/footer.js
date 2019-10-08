import React, { Component } from "react"
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"

export class footer extends Component {
  render() {
    return (
      <div
        className="flex flex-col lg:flex-row justify-between py-6 px-12"
        style={{ backgroundColor: "var(--main-purple)", color: "#fff" }}
      >
        <div className="self-center">
          <ul className="flex flex-col text-center lg:flex-row mb-0">
            <li className="mx-1">Home</li>
            <li className="mx-1">Membership</li>
            <li className="mx-1">Services</li>
            <li className="mx-1">Classes</li>
            <li className="mx-1">About</li>
            <li className="mx-1">Contact</li>
          </ul>
          <ul className="flex flex-col lg:flex-row text-center">
            <li className="mx-1 text-xs text-gray-500">Privacy Policy</li>
            <li className="mx-1 text-xs text-gray-500">Terms Of Use</li>
            <li className="mx-1 text-xs text-gray-500">Policies</li>
            <li className="mx-1 text-xs text-gray-500">Accessibility Policy</li>
          </ul>
          <p className="mb-0 mx-1 text-sm py-2 lg:py-0">
            &copy; {new Date().getFullYear()} PMI Total Fitness
          </p>
        </div>
        <div className="self-center">
          <ul className="flex">
            <li className="mx-1 text-2xl">
              <FaFacebook />
            </li>
            <li className="mx-1 text-2xl">
              <FaTwitter />
            </li>
            <li className="mx-1 text-2xl">
              <FaInstagram />
            </li>
            <li className="mx-1 text-2xl">
              <FaEnvelope />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default footer
