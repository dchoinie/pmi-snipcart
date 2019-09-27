import React, { Component } from "react"
import PropTypes from "prop-types"

export class sectionTitle extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: "Section Title",
  }

  render() {
    return (
      <div className="flex justify-center text-3xl lg:text-5xl purple font-bold my-12">
        {this.props.title}
      </div>
    )
  }
}

export default sectionTitle
