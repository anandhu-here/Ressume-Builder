import React, { Component } from 'react';
import { withRouter } from 'react-router';

export class FinalPage extends Component {
    
    render() {
        return (
            <div className="container" >
                <p className="display-4" > Well Done! Click here for the Preview</p>
                <button onClick={()=>this.props.history.push('/resume')} className="btn btn-lg btm-success">Preview</button>
            </div>
        )
    }
}
export default withRouter(FinalPage);
