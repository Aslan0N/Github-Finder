import React, { Component } from 'react'
import axios from 'axios';
import SearchBox from './Components/SearchBox';
import Users from './Components/Users'

export class App extends Component {
  constructor(){
    super();
    this.state={
        allUser:[]
    }
}

selectUser=(userName)=>{
    axios.get(`https://api.github.com/search/users?q=${userName}`)
    .then(res=>{
        console.log(res.data.items);
        this.setState({allUser:res.data.items})
    })
}
  render() {
    return (
      <>
      <SearchBox selectUser={this.selectUser} />
      <Users allUser={this.state.allUser} />
      </>
    )
  }
}

export default App