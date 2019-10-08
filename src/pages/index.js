import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from "../components/hero"
import Features from "../components/features"
import Join from "../components/join"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Features />
    <Join />
  </Layout>
)

export default IndexPage
