import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import PurpleBackground from "../images/purpleBackground.png"

export class testimonialsCarousel extends Component {
  render() {
    return (
      <div className="px-6 lg:px-0">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showIndicators={true}
          showStatus={false}
          autoPlay={true}
        >
          <div
            className="py-12 h-full"
            style={{
              backgroundColor: "var(--main-purple)",
            }}
          >
            <h4>
              "Excellent gym, owners and employees are very helpful and
              professional."
            </h4>
            <p>- Nicholas</p>
            <p className="mb-0">July 25th, 2018</p>
          </div>
          <div
            className="py-12 h-full"
            style={{
              backgroundColor: "var(--main-purple)",
            }}
          >
            <h4>
              "I love to go to PMI Total Fitness. Everyone is friendly,
              professional and the place is clean. My favorite is the tanning
              beds. 😎"
            </h4>
            <p>- Christina</p>
            <p className="mb-0">September 20th, 2018</p>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default testimonialsCarousel
