import React from 'react';
import axios from 'axios';
import ShopForm from './ShopForm';
import {List, Map} from 'immutable';
import User from '../entities/User';
import Product from './Product';
import shortid from 'shortid';

const shop = {
  display: "flex",
  flexDirection: "row",

  height: "100vh",
  width: "100vw",

  color: 'white'
}

const leftShop = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "black",
  height: "100vh",
  width: "50vw",
}

const rightShop = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "rgb(237, 90, 119)",
  height: "100vh",
  width: "50vw",

  overflow: "scroll",
}

const productsBoxStyle = {
  margin: "10px",
  height: "90%",
  width: "90%"
}

const basketTitleStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  writingMode: "vertical-rl",
  textOrientation: "upright",
}

const errorValid = {
  color: 'red',
  marginTop: "10px"
}

export default class Shop extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loggedUser: '',
      username: 'unset',
      products: new List(),
      nameValue: '',
      quantityValue: '',
      colorValue: '',
      error: ''
    }
  }

  componentDidMount() {
    this.getUser()
  }

  handleName = (value) => {
    this.setState({
      nameValue: value,
    })
  }

  handleQuantity = (value) => {
    this.setState({
      quantityValue: value
    })
  }

  handleColor = (value) => {
    this.setState({
      colorValue: value
    })
  }


  getUser = async () => {
    try{
      const userData = await axios.get('http://localhost:3001/shop');
      const user = new User(userData);
      if(userData.data.name){
        this.setState({
          loggedUser: user,
          username: userData.data.name
        })
      } else {
        console.log("no username...");
      }
    }catch(err){
      console.log('shop username Error', err);
    }
  }

  addProduct = async () => {
    try {
      const data1 = {
        name: this.state.nameValue,
        quantity: this.state.quantityValue,
        color: this.state.colorValue,
      }

      const quantity = this.state.quantityValue;
      if (!(/^0$|^[1-9][0-9]*$/).test(quantity)) {
          return this.setState({error: 'Invalide caractère...ex: 1'});
      }

      await axios.post('http://localhost:3001/shop', data1);
      const products =  this.state.products.push(Map(data1));
      console.log('products',products);
      this.state.loggedUser.products.push(products);
      this.setState({
        products: List(products),
      });
    } catch(err){
      console.log(err)
    } 
  }

  render(){
    return(
      <main style={shop}>
        <div style={leftShop}>
          <div style={errorValid}>{this.state.error}</div>
          <h1>Le SHOP de {this.state.username}</h1>
          <h2>Ajouter des produits au panier</h2>
          <ShopForm 
            handleName={this.handleName}
            handleQuantity={this.handleQuantity}
            handleColor={this.handleColor}
            onSubmit={this.addProduct}
          />
        </div>
        <div style={rightShop}>
          <h2 style={basketTitleStyle}>Panier</h2>
          <div style={productsBoxStyle}>
            {
              this.state.products.map(product => {
                return(
                  <Product 
                    product={product}
                    key={shortid.generate()}
                    name={product.name}
                    quantity={product.quantity}
                    color={product.color}
                  />
                )
              })
            } 
          </div>
        </div>
      </main>
    )
  }
}
