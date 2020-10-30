import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

const login = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",

  height: "100vh",
  width: "100vw",

  backgroundColor: 'rgb(237, 90, 119)',
  color: 'white'
}

const loginTitle = {
  marginBottom: "40px",
  fontSize: "3rem"
}

const loginInput = {
  border: "none",
  outline: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center"
}

const loginBtn = {
  border: "none",

  height: "40px",
  borderRadius: "10px",
  marginRight: "10px",
  textAlign: "center",
  backgroundColor: "black",
  color: "white"
}

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
      if(user.data.email === this.state.email && user.data.password === this.state.password){
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
      return(<Redirect to="/shop"/>)
    }

    return(
      <section style={login}>
        <h1 style={loginTitle}>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input style={loginInput} onChange={this.handleEmailValue} placeholder="Email"/>
          <input style={loginInput} onChange={this.handlePasswordValue} placeholder="Password"/>
          <button style={loginBtn} onSubmit={this.handleSubmit}>Login</button>
        </form>
      </section>
    )
  }
}