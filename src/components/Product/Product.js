import React, { Component } from 'react'

class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        } 
    }

 

    onDeleteClick = () => {
      this.props.deleteProductFn(this.props.product.id)
    }
    
  render() {
    return (
      <div className="product">
          <img src={this.props.product.img} alt=""/>
          <h5>{this.props.product.name}</h5>
          <h5>${this.props.product.price}</h5>
          <div className='edit-delete-button'>
            <button className="button_d" onClick={this.onDeleteClick}>Delete</button>
            <button onClick={this.props.onEditClick}>Edit</button>
          </div>
      </div>
    )
  }
}

export default Product