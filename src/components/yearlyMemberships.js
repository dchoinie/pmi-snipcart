import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../components/sectionTitle"

export default () => {
  const data = useStaticQuery(graphql`
    {
      yearlyMemberships: allContentfulYearlyMembership {
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
        title="Yearly Membership Options"
        subTitle="Sign up for one (1) year of access to PMI. Fee will be charged recurringly on a monthly basis (*requires EFT*)"
      />
      <div id="monthlyMemberships-container" className="px-6">
        {data.yearlyMemberships.edges.map(({ node: yearlyMembership }) => {
          return (
            <div
              className="text-center flex flex-col justify-between p-4"
              style={{
                border: "2px solid var(--main-purple)",
                borderRadius: "0.5rem",
                boxShadow: "2px 2px 15px var(--main-black)",
              }}
            >
              <h2>{yearlyMembership.title}</h2>
              <p>{yearlyMembership.description.description}</p>
              <h6>Price: ${yearlyMembership.price}</h6>
              <button
                className="main-btn snipcart-add-item"
                data-item-id={yearlyMembership.id}
                data-item-name={yearlyMembership.title}
                data-item-price={yearlyMembership.price}
                data-item-description={yearlyMembership.description.description}
                data-item-url="https://pmitotalfitness.netlify.com/membership"
                data-item-image={yearlyMembership.image.fluid.src}
                data-item-payment-interval="Month"
                data-item-payment-intervai-count="1"
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
