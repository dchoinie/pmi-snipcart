import React from "react"
import Product from "./product"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulMembershipType {
      edges {
        node {
          id
          title
          price
          description
          category
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
`

export default () => {
  return (
    <div>
      <StaticQuery
        query={getProducts}
        render={data => {
          return (
            <section className="">
              <div className="products-container">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </section>
          )
        }}
      />
    </div>
  )
}
