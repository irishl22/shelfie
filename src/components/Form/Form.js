import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imageUrl: '',
      productName: '',
      price: 0
    }

  }
    handleChange = e => {
      let { name, value } = e.target
      this.setState({
        [name]: value
      })
    }

    handleCancelClick = () => {
      this.setState({
        imageUrl: '',
        productName: '',
        price: 0
      })
    }

  render() {
    return (
      <div>
        <h5>Image URL:</h5>
        <input name="imageUrl" value={this.state.imageUrl} type="text" onChange={this.handleChange}/>

        <h5>Product Name:</h5>
        <input name="productName"value={this.state.productName} type="text" onChange={this.handleChange}/>

        <h5>Price:</h5>
        <input name="price" value={this.state.price} type="number" onChange={this.handleChange}/>

        <button onClick={this.handleCancelClick}>Cancel</button>
        <button>Add</button>
      </div>
    )
  }
}

export default Form