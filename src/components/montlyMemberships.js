import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../components/sectionTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      monthlyMemberships: allContentfulMonthlyMembership {
        edges {
          node {
            category
            description {
              description
            }
            id
            image {
              fluid {
                src
                ...GatsbyContentfulFluid
              }
            }
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
        title="Montly Membership Options"
        subTitle="Sign up for one (1) month of access to PMI"
      />
      <div id="monthlyMemberships-container" className="px-6">
        {data.monthlyMemberships.edges.map(({ node: monthlyMembership }) => {
          return (
            <div
              className="text-center flex flex-col justify-between p-4"
              style={{
                border: "2px solid var(--main-purple)",
                borderRadius: "0.5rem",
                boxShadow: "2px 2px 15px var(--main-black)",
              }}
            >
              <h2>{monthlyMembership.title}</h2>
              <p>{monthlyMembership.description.description}</p>
              <h6>Price: ${monthlyMembership.price}</h6>
              <button
                className="main-btn snipcart-add-item"
                data-item-id={monthlyMembership.id}
                data-item-name={monthlyMembership.title}
                data-item-price={monthlyMembership.price}
                data-item-description={
                  monthlyMembership.description.description
                }
                data-item-url="https://pmitotalfitness.netlify.com/membership"
                data-item-image={monthlyMembership.image.fluid.src}
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
