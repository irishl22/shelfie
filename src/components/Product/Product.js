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
          {this.props.product.name}
          {this.props.product.price}
          <div className='edit-delete-button'>
            <button className="button_d" onClick={this.onDeleteClick}>Delete</button>
            <button onClick={this.props.onEditClick}>Edit</button>
          </div>
      </div>
    )
  }
}

export default Product