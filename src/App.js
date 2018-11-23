import React, { Component } from 'react';
import './App.css';
// components
import Header from './components/Header'
import Product from './components/Product'
class App extends Component {
  state={
    isLoading:false,
    cartItems:[],
    products:[]
  }

  componentDidMount(){
    this.setState({ isLoading: true});
    fetch('https://product-list.glitch.me/')
      .then(res=>res.json())
      .then(products=> this.setState({products, isLoading:false}));
  }

  render() {
    const {isLoading, cartItems, products}=this.state;

    return (
      <div className="App">
        <div className='container'>
          <Header/>
          <br/>
          <div className='row'>
            <div className='col-lg-6 s12'>
              {isLoading ? 'Loading Items...': products.map(product =>(
                <Product 
                key={product.id}
                product={product}
                />
              ))}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
