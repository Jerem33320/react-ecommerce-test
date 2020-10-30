import React from 'react';
import axios from 'axios';

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

const formShop = {
  display: "flex",
  flexDirection: "column"
}

const shopInput = {
  border: "none",
  outline: "none",

  height: "40px",
  borderRadius: "10px",
  marginBottom: "10px",
  textAlign: "center"
}

const shopBtn = {
  border: "none",

  height: "40px",
  borderRadius: "10px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white",
  fontWeight: "bold",
  fontSize: "1.2rem"
}

const rightShop = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: "rgb(237, 90, 119)",
  height: "100vh",
  width: "50vw",
}

export default class Shop extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: {},
      username: 'unset',
      products: {}
    }
  }

  componentDidMount() {
    this.getUser()
  }

  getUser = async () => {
    try{
      const username = await axios.get('http://localhost:3001/shop');
      console.log('username' , username.data.products);
      if(username.data.name){
        this.setState({
          username: username.data.name
        })
      } else {
        console.log("no username...");
      }
    }catch(err){
      console.log('shop username Error', err);
    }
  }

  render(){
    if(this.state.username === 'unset'){
      this.getUser();
    }
    
    return(
      <main style={shop}>
        <div style={leftShop}>
          <h1>Le SHOP de {this.state.username}</h1>
          <h2>Ajouter des produits au panier</h2>
          <form style={formShop}>
            <input style={shopInput} placeholder="Nom"/>
            <input style={shopInput} placeholder="Quantité"/>
            <input style={shopInput} placeholder="Couleur"/>
            <input style={shopInput} placeholder="Prix"/>
            <button style={shopBtn}>Ajouter</button>
          </form>
        </div>
        <div style={rightShop}>
          <h2>Panier</h2>
        </div>
      </main>
    )
  }
}
