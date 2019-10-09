import React from "react"
import TestimonialsCarousel from "./testimonialsCarousel"

export default () => {
  return (
    <div style={{ backgroundColor: "var(--main-purple)", color: "#fff" }}>
      <h2 className="text-center py-6 text-3xl lg:text-5xl">Testimonials</h2>
      <TestimonialsCarousel />
    </div>
  )
}

{
  /* <div className="flex justify-around py-12 text-2xl">
        <div className="max-w-xl text-right">
          <p>
            "Excellent gym, owners and employees are very helpful and
            professional."
          </p>
          <p>- Nicholas</p>
          <p>July 25th, 2018</p>
        </div>
        <div className="max-w-xl text-right">
          <p>
            "I love to go to PMI Total Fitness. Everyone is friendly,
            professional and the place is clean. My favorite is the tanning
            beds. 😎"
          </p>
          <p>- Christina</p>
          <p>September 20th, 2018</p>
        </div>
      </div> */
}
