import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../components/sectionTitle"

export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      dayPasses: allContentfulDayPasses(sort: { fields: price, order: ASC }) {
        edges {
          node {
            category
            description {
              description
            }
            id
            price
            title
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionTitle
        title="Day Passes"
        subTitle="Not ready to buy a membership? No Problem! Come check out PMI without any commitment"
      />
      <div id="dayPass-container">
        {data.dayPasses.edges.map(({ node: dayPass }) => {
          return (
            <div
              key={dayPass.id}
              className="text-center max-w-lg mx-auto p-4 my-4 lg:my-0"
              style={{
                boxShadow: "1px 1px 8px var(--main-black)",
                borderRadius: "0.5rem",
              }}
            >
              <h4>{dayPass.title}</h4>
              <p>Price: ${dayPass.price}</p>
              <p>{dayPass.description.description}</p>
              <button
                className="main-btn snipcart-add-item w-full"
                data-item-id={dayPass.id}
                data-item-name={dayPass.title}
                data-item-price={dayPass.price}
                data-item-description={dayPass.description.description}
                data-item-url="https://pmitotalfitness.netlify.com/membership"
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

{
  /* <div
            className="text-center flex flex-col justify-between p-4 max-w-md mx-auto"
            style={{
              border: "2px solid var(--main-purple)",
              borderRadius: "0.5rem",
              boxShadow: "2px 2px 15px var(--main-black)",
            }}
          >
            <h2>{dayPass.title}</h2>
            <p>{dayPass.description.description}</p>
            <h6>Price: ${dayPass.price} + tax</h6>
            <button
              className="main-btn snipcart-add-item"
              data-item-id={dayPass.id}
              data-item-name={dayPass.title}
              data-item-price={dayPass.price}
              data-item-description={dayPass.description.description}
              data-item-url="https://pmitotalfitness.netlify.com/membership"
            >
              Buy
            </button>
          </div> */
}
