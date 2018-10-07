import React from 'react'

const Product =({product}) => {
  return (
    <div className="card z-depth-0 product-summary">
      <div className="card-content grey-text text-darken-3">
      <span className="card-title"> {product.product}</span>
      <p className="size">{product.size} unities</p>
      <p className="date">10.10.18</p>
      </div>
    </div>
  )
}
export default Product