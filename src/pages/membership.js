import React from "react"
import Layout from "../components/layout"
import DayPasses from "../components/dayPasses"
import MonthlyMemberships from "../components/montlyMemberships"
import YearlyMemberships from "../components/yearlyMemberships"

export default () => {
  return (
    <Layout>
      <div className="px-6 lg:px-0 my-12">
        <DayPasses />
        <MonthlyMemberships />
        <YearlyMemberships />
      </div>
    </Layout>
  )
}
