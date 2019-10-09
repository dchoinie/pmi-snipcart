import React from "react"
import Layout from "../components/layout"
import DayPasses from "../components/dayPasses"
import MonthlyMemberships from "../components/montlyMemberships"

export default () => {
  return (
    <Layout>
      <div className="px-6 lg:px-0">
        <DayPasses />
        <MonthlyMemberships />
      </div>
    </Layout>
  )
}
