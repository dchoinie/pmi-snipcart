import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const membershipQuery = graphql`
  query MyQuery {
    allContentfulMembershipType {
      nodes {
        category
        description
        id
        price
        title
        contentful_id
        image {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }
`

export default ({ data }) => {
  return (
    <Layout>
      {/* {data.allContentfulMembershipType.nodes.map(node => (
        <div key={node.contentful_id}>
          <p>{node.title}</p>
          <p>${node.price}</p>
          <p>{node.description}</p>
          <p>{node.category}</p>
          <hr />
        </div>
      ))} */}
      Membership
    </Layout>
  )
}
