import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

export class button extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: "Button",
    to: "/",
  }

  render() {
    return (
      <div className="my-2">
        <Link to={this.props.to} className="main-btn">
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default button
