import React from 'react';

const productStyle = {
  display: "flex",
  flexDirection: "row",
}
export default class Todo extends React.Component{
    render() {
      return(
      <div style={productStyle}>
        <div>Nom du produit: {this.props.product.get('name')}</div>
        <div>-Quantité: {this.props.product.get('quantity')}</div>
        <div>-Couleur: {this.props.product.get('color')}</div>
      </div>
      )
    }
}