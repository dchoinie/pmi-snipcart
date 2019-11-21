import React from "react"
import Layout from "../components/layout"
import DayPasses from "../components/dayPasses"
import MembershipOptions from "../components/membershipOptions"
import Benefits from "../components/benefits"

export default () => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <MembershipOptions />
        <Benefits />
      </div>
    </Layout>
  )
}
