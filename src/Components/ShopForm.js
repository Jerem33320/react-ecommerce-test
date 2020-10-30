import React from 'react';

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

export default class ShopForm extends React.Component{
  handleName = (e) => {
    this.props.handleName(e.target.value)
  }

  handleQuantity = (e) => {
    this.props.handleQuantity(e.target.value)
  }

  handleColor = (e) => {
    this.props.handleColor(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.props.nameValue,
      quantity: this.props.quantityValue,
      color: this.props.colorValue,
    })
  }

  render(){
    return(
      <div>
        <form style={formShop}>
          <input style={shopInput} onChange={this.handleName} placeholder="Nom"/>
          <input style={shopInput} onChange={this.handleQuantity} placeholder="Quantité"/>
          <input style={shopInput} onChange={this.handleColor} placeholder="Couleur"/>
          <button style={shopBtn} onClick={this.handleSubmit}>Ajouter</button>
        </form>
      </div>
    )
  }
}