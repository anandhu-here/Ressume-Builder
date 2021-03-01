import React, { Component } from 'react'
import Education from './Education';
import Experience from './Experience';
import FinalPage from './FinalPage';
import Personal from './Personal';
import Skills from './Skills';

export class Build extends Component {
    state={
        page:1
    }
    changeTab = (tab) => {
        this.setState({
            page:tab
        })
    }
    render() {

        switch (this.state.page) {
            case 1:
                return(
                    <Personal changeTab={this.changeTab} currentTab={this.state.page} />
                )
                
            case 2:
                return(
                    <Education changeTab={this.changeTab} currentTab={this.state.page} />
                )
            case 3:
                return(
                    <Experience changeTab={this.changeTab} currentTab={this.state.page} />
                )
            case 4:
                return(
                    <Skills changeTab={this.changeTab} currentTab={this.state.page} />
                )
            case 5:
                return(
                    <FinalPage />
                )
            default:
                return(
                    <Personal changeTab={this.changeTab} currentTab={this.state.page} />
                )
        }
    }
}

export default Build
