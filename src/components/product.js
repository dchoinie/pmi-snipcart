import React from "react"
import Img from "gatsby-image"

export default ({ product }) => {
  return (
    <div className="" style={{ border: "1px solid red" }}>
      <div className="card text-center" style={{ border: "1px solid blue" }}>
        <Img fluid={product.image.fluid} className="card-image-top" />
        <div className="card-body">
          <h6>{product.title}</h6>
          <h6>${product.price}</h6>
          <button
            className="main-btn snipcart-add-item"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-url="https://pmitotalfitness.netlify.com/membership"
            data-item-description={product.description}
            data-item-image={product.image.fluid.src}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  )
}
