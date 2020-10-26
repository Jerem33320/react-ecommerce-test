import React from 'react';
import shortid from 'shortid';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Auth extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      name: '',
      email: '',
      password: '',
      authIn: false,
      users: []
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    try{
      const user = {
        [this.state.id]: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          products: {}
        }
      }
      
      axios.post('http://localhost:3001/auth', user);
      const users = [...this.state.users, user];
      if(!users.includes(this.state.id)){
        console.log("auth réussie");
        this.setState({
          authIn: true,
          users: users
        })
      } else {
        console.log("Auth failed...");
      }
    }catch(err){
      console.log('Auth Error', err);
    }
  }

  handleNameValue = e => {
    this.setState({
      id: shortid.generate(),
      name: e.target.value
    })
  }

  handleEmailValue = e => {
    this.setState({
      email: e.target.value
    })
  }

  handlePasswordValue = e => {
    this.setState({
      password: e.target.value
    })
  }

  render(){
    if(this.state.authIn === true){
      console.log("Auth Route ready");
      return(<Redirect to="/login"/>)
    }

    return(
      <section>
        <h1>S'authentifier</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleNameValue} placeholder="Entrez votre nom"/>
          <input onChange={this.handleEmailValue} placeholder="Email"/>
          <input onChange={this.handlePasswordValue} placeholder="Password"/>
          <button onSubmit={this.handleSubmit}>S'authentifier</button>
        </form>
      </section>
    )
  }
}