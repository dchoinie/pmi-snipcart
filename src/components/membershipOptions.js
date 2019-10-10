import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "./sectionTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      monthToMonth: allContentfulMonthToMonth(
        sort: { fields: price, order: ASC }
      ) {
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
      contract: allContentfulYearlyContract(
        sort: { fields: price, order: ASC }
      ) {
        edges {
          node {
            category
            description {
              description
            }
            id
            price
            title
            initialFee
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionTitle
        title="Month-To-Month Options"
        subTitle="No long term contract required, unlimited use of aerobic equipment, weight machines, free weights &amp; locker room"
      />
      <div className="membershipOptions-container my-12">
        {data.monthToMonth.edges.map(({ node: monthToMonth }) => {
          return (
            <div
              className="text-center p-4 max-w-lg mx-auto"
              key={monthToMonth.id}
              style={{
                boxShadow: "1px 1px 8px var(--main-black)",
                borderRadius: "0.5rem",
              }}
            >
              <h4>{monthToMonth.title}</h4>
              <p>Price: ${monthToMonth.price}</p>
              <p>{monthToMonth.description.description}</p>
              <button
                className="main-btn snipcart-add-item w-full"
                data-item-id={monthToMonth.id}
                data-item-name={monthToMonth.title}
                data-item-price={monthToMonth.price}
                data-item-description={monthToMonth.description.description}
                data-item-url="https://pmitotalfitness.netlify.com/membership"
              >
                Buy
              </button>
            </div>
          )
        })}
      </div>
      <SectionTitle
        title="Yearly Contract Options"
        subTitle="First &amp; last monthly fee due on initial purchase, unlimited use of aerobic equipment, weight machines, free weights &amp; locker room, 1 monthly guest pass plus discounted rates on massage, tanning, yoga &amp; personal training"
      />
      <div className="membershipOptions-container my-12">
        {data.contract.edges.map(({ node: contract }) => {
          return (
            <div
              className="text-center p-4 max-w-lg mx-auto"
              key={contract.id}
              style={{
                boxShadow: "1px 1px 8px var(--main-black)",
                borderRadius: "0.5rem",
              }}
            >
              <h4>{contract.title}</h4>
              <p>Price: ${contract.price}</p>
              <p>{contract.description.description}</p>
              <button
                className="main-btn snipcart-add-item w-full"
                data-item-id={contract.id}
                data-item-name={contract.title}
                data-item-price={contract.price}
                data-item-description={contract.description.description}
                data-item-min-quantity="12"
                data-item-max-quantity="12"
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
