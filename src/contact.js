import React, { Component } from 'react'

export default class Contact extends Component {

    onSubmit = () => {
        this.props.history.push('/users/:id')
    }

    render() {
        return (
            <form>
                <input placeholder="name" type="name" />
                <input placeholder="email" type="email" />
                <button onClick={this.onSubmit}>Submit</button>
            </form>
        )
    }
}
