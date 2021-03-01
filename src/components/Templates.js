import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { choose_template } from '../action/templates'
import { templates } from '../server/templates'
export class Templates extends Component {
    handleClick = (id) =>{
        this.props.choose_template(id)
    }
    componentDidUpdate(prevProps, nextState){
        if(prevProps !== this.props){
            this.props.history.push('/create');
        }
    }
    render() {
        return (
            <div className="container border d-flex justify-content-around">
                {templates.map(temp=>(
                    <img 
                        key={temp.id} 
                        src={temp.image} 
                        class="rounded mx-auto" 
                        style={{width:'350px', 
                            height:'450px', 
                            objectFit:'contain', 
                            cursor:'pointer'
                            }} 
                        alt="..."
                        onClick = {this.handleClick.bind(this, temp.id)}
                        />
                        
                ))}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    reducer:state
})

export default connect(mapStateToProps, {choose_template})(withRouter(Templates));
