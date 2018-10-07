import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Product from './Product'
import {connect} from 'react-redux'
class ProductList extends Component {
  render() {
    const {products}  = this.props
    return (
      <div className="product-list section">
      {products&& products.map(product=>{
       return( <Product product={product} key={product.id}/>)
      })}
     
      
      <NavLink to='/create_product' className="waves-effect waves-light btn white-text" >Add new </NavLink>
      <button  className="waves-effect waves-light btn white-text" onClick={this.props.history.goBack}>Back</button>
      </div>

    )
  }
}
const mapStateToProps = (state) =>{
  return{
    products:state.product.products
  }
}
export default connect(mapStateToProps)(ProductList)