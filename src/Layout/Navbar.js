import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-dark bg-dark">
                <Link class="navbar-brand" to="/">
                    Resume Builder
                </Link>
            </nav>
        )
    }
}

export default Navbar
