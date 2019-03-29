import React, { Component } from 'react'
import axios from 'axios';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      img: '',
      name: '',
      price: 0,
      id: 0,
    }

  }
  // handleUpdate = (e, product) => {
  //   e.preventDefault()
  //   axios.put(`/api/product/${product.id}`, product).then(res => {
  //     if(editing === true)
  //     this.setState({
  //       inventory: res.data,
  //       editing: false
  //     })
  //   })
  // }

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
  
  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/product', this.state)
      .then(res => {
        this.setState({
          img: '',
          name: '',
          price: 0
        })
        this.props.getMethod()
      }).catch(err => console.log(err))
  }


  render() {
    return this.props.editing ? (
      <div className="form">
        <img src="https://image.shutterstock.com/mosaic_250/1390678/330831185/stock-photo-street-fashion-concept-closeup-portrait-of-a-pretty-girl-wearing-hat-and-leather-jacket-round-330831185.jpg" alt="" />
        <h5>Image URL:</h5>
        <input name="img" value={this.state.img} type="text" onChange={this.handleChange}/>

        <h5>Product Name:</h5>
        <input name="name"value={this.state.name} type="text" onChange={this.handleChange}/>

        <h5>Price:</h5>
        <input name="price" value={this.state.price} type="number" onChange={this.handleChange}/>

        <div className="add-cancel-buttons">
          <button className="button_c" onClick={this.handleCancelClick}>Cancel</button>
          <button>Save Changes</button>
        </div>
      </div>
        ):(
      <div className="form">
         <img src="https://image.shutterstock.com/mosaic_250/1390678/330831185/stock-photo-street-fashion-concept-closeup-portrait-of-a-pretty-girl-wearing-hat-and-leather-jacket-round-330831185.jpg" alt="" />
         <h5>Image URL:</h5>
        <input name="img" value={this.state.img} type="text" onChange={this.handleChange}/>

        <h5>Product Name:</h5>
        <input name="name"value={this.state.name} type="text" onChange={this.handleChange}/>

        <h5>Price:</h5>
        <input name="price" value={this.state.price} type="number" onChange={this.handleChange}/>
        <div className="add-cancel-buttons">
          <button className="button_c" onClick={this.handleCancelClick}>Cancel</button>
          <button onClick={this.handleSubmit}>Add To Inventory</button> 
        </div>  

      </div>    

    )
  }
}

export default Form