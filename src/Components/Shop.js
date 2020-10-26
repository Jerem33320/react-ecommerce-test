import React from 'react';
import axios from 'axios';

export default class Shop extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users: {},
      username: 'unset',
    }
  }

  getUsername = async () => {
    try{
      const username = await axios.get('http://localhost:3001/shop');
      if(username.data){
        this.setState({
          username: username.data
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
      this.getUsername();
    }
    
    return(
      <main>
        <h1>SHOP of {this.state.username}</h1>
      </main>
    )
  }
}
