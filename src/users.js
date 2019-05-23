import React, { Component } from 'react'
import { Route, Link,NavLink } from 'react-router-dom'

const User = ({ match }) => <p>{match.params.id}</p>

class Users extends React.Component {

    onClick= () =>{
        this.props.history.push('/contact')
    }
    render() {
        console.log(this.props)
      const { url } = this.props.match
      console.log({url})
      return (
        <div>
          <h1>Users</h1>
          <strong>select a user</strong>
          <ul>
            <li>
              <NavLink ClassName="active"  to="/users/1">User 1 </NavLink>
            </li>
            <li>
              <NavLink ClassName="active" to="/users/2">User 2 </NavLink>
            </li>
            <li>
              <NavLink ClassName="active" to="/users/3">User 3 </NavLink>
            </li>
          </ul>
          <Route path="/users/:id"  component={User} />
        </div>
      )
    }
  }
  export default Users