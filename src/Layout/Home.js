import React, { Component } from 'react'
import Templates from '../components/Templates'

export class Home extends Component {
    render() {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                <h3 className="display-4">Select a resume</h3>
                <Templates />
            </div>
        )
    }
}

export default Home
