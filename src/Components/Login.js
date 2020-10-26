import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Login extends React.Component{
  constructor(props){
    super(props)
    this.state={
      id: '',
      name: '',
      email: '',
      password: '',
      logIn: false,
      users: []
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user = await axios.get('http://localhost:3001/login');
      console.log(user.data.email);
      if(user.data.email === this.state.email && user.data.password === this.state.password){
        console.log("login réussie");
        this.setState({
          logIn: true
        })
      } else {
        console.log("login failed...");
      }
    }catch(err){
      console.log('login Error', err);
    }
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
    if(this.state.logIn === true){
      console.log("log Route ready");
      return(<Redirect to="/shop"/>)
    }

    return(
      <section>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleEmailValue} placeholder="Email"/>
          <input onChange={this.handlePasswordValue} placeholder="Password"/>
          <button onSubmit={this.handleSubmit}>Login</button>
        </form>
      </section>
    )
  }
}