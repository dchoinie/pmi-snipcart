import React from "react"
import Layout from "../components/layout"
import DayPasses from "../components/dayPasses"
import {
  FaCalendarAlt,
  FaDumbbell,
  FaLock,
  FaUserFriends,
  FaChalkboardTeacher,
  FaPercent,
} from "react-icons/fa"
import MembershipOptions from "../components/membershipOptions"

export default () => {
  return (
    <Layout>
      <div className="px-6 my-12">
        <MembershipOptions />
        <div
          style={{
            paddingTop: "5rem",
            paddingBottom: "5rem",
          }}
        >
          <h2 className="text-center">Membership Benefits Include:</h2>
          <div id="membership-benefits" className="max-w-6xl mx-auto">
            <div className="flex flex-col">
              <div className="flex my-6">
                <FaCalendarAlt className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Month-To-Month Options</h4>
                  <p className="mb-0 capitalize">
                    No annual commitment required
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <FaChalkboardTeacher className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Initial Personal Training Session</h4>
                  <p className="mb-0 capitalize">
                    Included With Any Annual Membership
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <FaDumbbell className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Instruction On Equipment</h4>
                  <p className="mb-0 capitalize">
                    We'll teach you how to properly use our machines &amp;
                    equipment
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex my-6">
                <FaLock className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Locker Room Access</h4>
                  <p className="mb-0 capitalize">
                    Included with any membership type
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <FaUserFriends className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Guest Pass</h4>
                  <p className="mb-0 capitalize">
                    Monthly guest pass included with any annual membership
                  </p>
                </div>
              </div>
              <div className="flex my-6">
                <FaPercent className="self-center text-5xl mr-4 purple" />
                <div className="flex flex-col">
                  <h4 className="mb-0">Discounted Rates</h4>
                  <p className="mb-0 capitalize">
                    On select PMI services including massage, personal training,
                    yoga &amp; tanning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DayPasses />
      </div>
    </Layout>
  )
}
