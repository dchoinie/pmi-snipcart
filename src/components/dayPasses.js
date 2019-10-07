import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../components/sectionTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      dayPasses: allContentfulDayPasses {
        edges {
          node {
            category
            description {
              description
            }
            id
            price
            title
            image {
              fluid {
                src
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionTitle title="Day Passes" />
      <div id="dayPass-container">
        {data.dayPasses.edges.map(({ node: dayPass }) => {
          return (
            <div className="text-center">
              <h2>{dayPass.title}</h2>
              <p>{dayPass.description.description}</p>
              <h6>${dayPass.price}</h6>
              <button
                className="main-btn snipcart-add-item"
                data-item-id={dayPass.id}
                data-item-name={dayPass.title}
                data-item-price={dayPass.price}
                data-item-description={dayPass.description.description}
                data-item-url="https://pmitotalfitness.netlify.com"
                data-item-image={dayPass.image.fluid.src}
              >
                Buy
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
