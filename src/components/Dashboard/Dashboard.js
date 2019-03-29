import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: this.props.inventory
    }
  }


  render() {
    return (
      <div>
        {this.props.inventory.map((product, i) => <Product key={i} product={product}/>)}
       
      </div>
    )
  }
}

export default Dashboard
