import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import SectionTitle from "./sectionTitle"
import MembershipButton from "../components/buttons/membership-button"
import { FaCheck, FaTimes } from "react-icons/fa"

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
      <h2 className="text-4xl font-bold text-center pt-12">
        Choose Your Membership
      </h2>
      <h6 className="text-center">
        PMI offers month-to-month options or 1-year contract options. 24-hour
        access is available with either membership type.
      </h6>
      <div
        id="membershipOptions-container"
        className="text-center mx-12 my-12"
        // style={{ border: "1px solid red" }}
      >
        {data.monthToMonth.edges.map(({ node: monthToMonth }) => {
          return (
            <div
              className="p-4 mtm-card"
              key={monthToMonth.id}
              style={{
                backgroundColor: "var(--light-gray)",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h5>{monthToMonth.title}</h5>
                  <p className="capitalize">Type: {monthToMonth.category}</p>
                  <h2 className="font-bold">${monthToMonth.price}/mo</h2>
                  <p>{monthToMonth.description.description}</p>
                  <ul>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 1</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 2</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 3</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaTimes className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaTimes className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                  </ul>
                </div>
                <MembershipButton />
              </div>
            </div>
          )
        })}
        {data.contract.edges.map(({ node: contract }) => {
          return (
            <div
              className="p-4 con-card"
              key={contract.id}
              style={{
                backgroundColor: "var(--light-gray)",
              }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <h5>{contract.title}</h5>
                  <p>Type: {contract.category}</p>
                  <h2 className="font-bold">${contract.price}/mo</h2>
                  <p>{contract.description.description}</p>
                  <ul>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 1</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 2</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 3</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaCheck className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaTimes className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                    <li className="py-2 flex justify-center">
                      <FaTimes className="mx-1 self-center" />
                      <p className="mx-1 mb-0">Item 4</p>
                    </li>
                  </ul>
                </div>
                <MembershipButton />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
