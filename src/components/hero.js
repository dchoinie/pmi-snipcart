import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Background from "../images/gym1.jpg"
import Logo from "../images/logo.png"
import { FaUserPlus } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "gym2.jpeg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixelss
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `)
  return (
    <div
      className="flex justify-center text-center text-white hero"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 1) 8%, rgba(255, 255, 255, 0)), url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          // border: "1px solid red",
        }}
      >
        <div className="flex justify-end px-12 mx-4">
          <h1
            className="font-bold tracking-wide"
            style={{ fontSize: "6rem", color: "var(--main-purple)" }}
          >
            Live. Your. Life.
          </h1>
        </div>
        <div className="flex justify-end px-12 mx-4">
          <h4
            className="tracking-wide font-bold capitalize"
            style={{ fontFamily: "Quicksand" }}
          >
            {/* Tagline goes here */}
            Fitness is not a destination, It is a way of life.
          </h4>
        </div>
      </div>
    </div>
  )
}
