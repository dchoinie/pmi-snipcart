import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const hero = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "gym1.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = [
        `linear-gradient(rgba(255, 255, 255, 1) -10%, rgba(255, 255, 255, 0))`,
        data.desktop.childImageSharp.fluid,
      ]

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          style={{ height: "calc(100vh - 112.22px)" }}
        >
          <div
            className="flex justify-center lg:justify-end w-full h-full"
            // style={{ border: "1px solid red" }}
          >
            <div
              className="hero-content self-center mx-6 lg:mx-0 lg:pr-12"
              // style={{ border: "1px solid blue" }}
            >
              <h1 className="lg:tracking-wide font-bold hero-title">
                Live. Your. Life
              </h1>
              <h4 className="capitalize">
                Fitness is not a destination, it is a way of life
              </h4>
            </div>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

export default hero
