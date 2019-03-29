import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  constructor() {
    super();

    this.state = {
      inventory: [],
      id: 0,
      editing: false
    }
  }

  onEditClick = (index) => {
    this.setState({
      editing: true,
      // id: this.state.inventory[index].id
    })
  }

  componentDidMount = () => {
    axios.get('/api/inventory').then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(err => console.log('error on mount', err))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="main_body">
          <Dashboard getMethod={this.componentDidMount} inventory={this.state.inventory} onEditClick={this.onEditClick}/>
          <Form getMethod={this.componentDidMount} selected={this.state.selected} editing={this.state.editing}/>
        </div>
        
      </div>
    );
  }
}

export default App;
