import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProduct} from '../../store/actions/projectActions'

class CreateProduct extends Component {
    state={
        product:'',
        quantity:''
    }
    handleChange=(e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e) =>{
        e.preventDefault();
       this.props.createProduct(this.state)
    }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Add Product</h5>
        <div className="input-field">
        <label htmlFor="product">Product name</label>
        <input type="text" id="product"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <label htmlFor="quantity">Number</label>
        <input type="text" id="quantity"onChange={this.handleChange} />
        </div>
        <div className="input-field">
        <button className="btn darken-3 z-depth-0 ">Add to my List</button>
        </div>
        </form>
        <div className="section">
        <button  className="waves-effect waves-light btn white-text " onClick={this.props.history.goBack}>Back</button>
        </div>

      </div>
    )
  }
}
const mypDispatchToProps = (dispatch) =>{
    return{
        createProduct:(product)=> dispatch(createProduct(product))
    }
}
export default connect(null,mypDispatchToProps)(CreateProduct)