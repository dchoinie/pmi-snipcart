import React, { Component } from "react"
import PropTypes from "prop-types"

export class sectionTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
  }

  static defaultProps = {
    title: "Section Title",
  }

  render() {
    return (
      <div className="flex flex-col justify-center purple my-12 max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-3xl lg:text-5xl">{this.props.title}</h2>
        <h5 className="capitalize">{this.props.subTitle}</h5>
      </div>
    )
  }
}

export default sectionTitle
