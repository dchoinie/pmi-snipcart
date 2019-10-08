import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

export default () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          phone
          title
          description
          address
        }
      }
    }
  `)
  return (
    <div
      style={{
        backgroundColor: "var(--light-gray)",
        color: "var(--main-purple)",
      }}
    >
      <div className="flex flex-col text-center py-12">
        <h2 className="text-4xl font-bold uppercase">
          Join {data.site.siteMetadata.title} Today!
        </h2>
        <Link to="/membership" className="main-btn max-w-xs mx-auto my-6">
          Membership Options
        </Link>
        <div className="flex justify-center capitalize">
          <p className="underline">Request more information</p>&nbsp;
          <p>
            or call{" "}
            <span className="underline">{data.site.siteMetadata.phone}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
