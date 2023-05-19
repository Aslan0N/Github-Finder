import React, { Component } from 'react'

export class UsersCards extends Component {
  render() {
    const {avatar_url, login, followers, type} = this.props.User
    return (
      <>
        <div className="card">
          <img src={avatar_url} alt="" />
          <div className="card-owerlay">
            <h2 className="title">{login}</h2>
            <div className="text">
            <p>{followers}</p>
            <p>{type}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default UsersCards