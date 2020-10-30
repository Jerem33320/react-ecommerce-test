import React from 'react';

const productStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "10px",
}

const productInfoStyle = {
  marginRight: "10px",
  fontWeight: "bold",
  color: "black"
}

const productInfoSpan = {
  fontWeight: "normal",
  color: "white"
}

export default class Todo extends React.Component{
    render() {
      return(
      <div style={productStyle}>
        <div style={productInfoStyle}>Nom du Pdt: <span style={productInfoSpan}>{this.props.product.get('name')}</span></div>
        <div style={productInfoStyle}>Qté: <span style={productInfoSpan}>{this.props.product.get('quantity')}</span></div>
        <div style={productInfoStyle}>Clr: <span style={productInfoSpan}>{this.props.product.get('color')}</span></div>
      </div>
      )
    }
}