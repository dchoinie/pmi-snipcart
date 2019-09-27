import React, { Component } from "react"
import Icon1 from "../images/icons/coach1A.jpg"
import Icon2 from "../images/icons/machine1A.jpg"
import Icon3 from "../images/icons/treadmill1A.jpg"
import Icon4 from "../images/icons/weight1A.jpg"
import SectionTitle from "../components/sectionTitle"
import Button from "./button"

export class features extends Component {
  render() {
    return (
      <>
        <SectionTitle title="Gym Features" />
        <div className="features-container px-12 text-center">
          <div className="features-card flex-col text-center justify-center">
            <img className="features-icon mx-auto" src={Icon3} alt="Cardio" />
            <h2>Cardio</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consequatur tenetur voluptatibus minus, obcaecati culpa explicabo
              nesciunt nisi quaerat vel iusto.
            </p>
            <Button text="Learn More" to="/cardio" />
          </div>
          <div className="features-card flex-col text-center justify-center">
            <img
              className="features-icon mx-auto"
              src={Icon2}
              alt="Machine Weights"
            />
            <h2>Machine Weights</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consequatur tenetur voluptatibus minus, obcaecati culpa explicabo
              nesciunt nisi quaerat vel iusto.
            </p>
            <Button text="Learn More" to="/machine-weights" />
          </div>
          <div className="features-card flex-col text-center justify-center">
            <img
              className="features-icon mx-auto"
              src={Icon4}
              alt="Free Weights"
            />
            <h2>Free Weights</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consequatur tenetur voluptatibus minus, obcaecati culpa explicabo
              nesciunt nisi quaerat vel iusto.
            </p>
            <Button text="Learn More" to="/free-weights" />
          </div>
          <div className="features-card flex-col text-center justify-center">
            <img
              className="features-icon mx-auto"
              src={Icon1}
              alt="Personal Training"
            />
            <h2>Personal Training</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              consequatur tenetur voluptatibus minus, obcaecati culpa explicabo
              nesciunt nisi quaerat vel iusto.
            </p>
            <Button text="Learn More" to="/personal-training" />
          </div>
        </div>
      </>
    )
  }
}

export default features
