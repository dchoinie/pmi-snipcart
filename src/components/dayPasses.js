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
      <SectionTitle
        title="Day Passes"
        subTitle="Come check out our facilities without any long-term commitment"
      />
      <div id="dayPass-container" className="px-6">
        {data.dayPasses.edges.map(({ node: dayPass }) => {
          return (
            <div
              className="text-center flex flex-col justify-between p-4 max-w-md mx-auto"
              style={{
                border: "2px solid var(--main-purple)",
                borderRadius: "0.5rem",
                boxShadow: "2px 2px 15px var(--main-black)",
              }}
            >
              <h2>{dayPass.title}</h2>
              <p>{dayPass.description.description}</p>
              <h6>Price: ${dayPass.price}</h6>
              <button
                className="main-btn snipcart-add-item"
                data-item-id={dayPass.id}
                data-item-name={dayPass.title}
                data-item-price={dayPass.price}
                data-item-description={dayPass.description.description}
                data-item-url="https://pmitotalfitness.netlify.com/membership"
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
