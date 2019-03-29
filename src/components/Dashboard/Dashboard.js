import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: this.props.inventory
    }
  }

  deleteProduct = id => {
    axios.delete(`/api/product/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
      this.props.getMethod()
    }).catch(err => console.log('delete error', err))
  }

  render() {
    return (
      <div>
        {this.props.inventory.map((product, i) => <Product key={i} product={product} deleteProductFn={this.deleteProduct} onEditClick={this.props.onEditClick}/>)}
      </div>
    )
  }
}

export default Dashboard
