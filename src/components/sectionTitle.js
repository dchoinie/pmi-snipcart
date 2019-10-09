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
      <div className="flex flex-col justify-center text-center purple my-12">
        <h2 className="font-bold text-3xl lg:text-5xl">{this.props.title}</h2>
        <h4>{this.props.subTitle}</h4>
      </div>
    )
  }
}

export default sectionTitle
