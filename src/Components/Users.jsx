import React, { Component } from 'react'
import UsersCards from './UsersCards'

export class Users extends Component {
  render() {
    return (
      <>
      <div className="container">
        {
          this.props.allUser.map((item,index)=>(
            <UsersCards User={item} key={index} />
          ))
        }
      </div>
      </>
    )
  }
}

export default Users