import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Products from "../components/products"

export default ({ data }) => {
  return (
    <Layout>
      <Products />
    </Layout>
  )
}
