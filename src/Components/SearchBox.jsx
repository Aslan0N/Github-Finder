import React, { Component } from 'react'

export class SearchBox extends Component {

  constructor(){
    super();
    this.state={
      search:''
    }
  }

  startSearch =(e)=>{
    e.preventDefault();
    this.props.selectUser(this.state.search)
    this.setState({search:''})
  }


  render() {
    return (
      <>
        <form onSubmit={this.startSearch}>
          <input type="text" placeholder="Search user ..." value={this.state.search} onChange={(e)=>{this.setState({search:e.target.value})}} />
          <button type='submit' ><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </>
    )
  }
}

export default SearchBox