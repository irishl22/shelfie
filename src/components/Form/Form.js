import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: '',
      name: '',
      price: 0
    }

  }

    submit = (e) => {
      e.preventDefault()
      axios.post('/api/product', this.state)
        .then(res => {
          this.setState({
            img: '',
            name: '',
            price: 0
          })
        }).catch(err => console.log(err))

    }

    handleChange = e => {
      let { name, value } = e.target
      this.setState({
        [name]: value
      })
    }

    handleCancelClick = () => {
      this.setState({
        img: '',
        name: '',
        price: 0
      })
    }

  render() {
    return (
      <div>
        <h5>Image URL:</h5>
        <input name="imageUrl" value={this.state.img} type="text" onChange={this.handleChange}/>

        <h5>Product Name:</h5>
        <input name="productName"value={this.state.name} type="text" onChange={this.handleChange}/>

        <h5>Price:</h5>
        <input name="price" value={this.state.price} type="number" onChange={this.handleChange}/>

        <button onClick={this.handleCancelClick}>Cancel</button>
        <button>Add</button>
      </div>
    )
  }
}

export default Form