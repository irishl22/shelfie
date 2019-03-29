import React, { Component } from 'react'

class Product extends Component {
    constructor(props){
        super(props)

        this.state = {
        
        }
        
    }
  render() {
    return (
      <div>
          <img src={this.props.product.img} alt="" width={30}/>
          {this.props.product.name}
          {this.props.product.price}
      </div>
    )
  }
}

export default Product