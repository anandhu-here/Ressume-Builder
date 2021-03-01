import React, { Component } from 'react'
import { connect } from 'react-redux';
import { personal_submit } from '../../action/build';
import { store } from '../../store';

export class Personal extends Component {

    state = {
        first_name : "",
        current_position:"",
        email:"",
        addr_1:"",
        addr_3:"",
        phone:"",
        pin:"",
        last_name:"",
        addr_2:""
    }
    handleFields = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submit(e){
        e.preventDefault();
        store.dispatch(personal_submit(this.state));
    }
    componentDidUpdate(prevProps, nextState){
        if(prevProps !== this.props){
            if(this.props.state.buildReducer.personal_data !== null){
                const { changeTab, currentTab } = this.props;
                changeTab(currentTab + 1)
            }
        }
    }

    render() {
        return (
            <div className="container mt-5">
                <p className="display-4" >Please fill in your personal details</p>
                <form className="row mt-5" onSubmit = {(e)=>this.submit(e)} >
                    <div className ="col-6  form-group">
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="First Name" value={this.state.first_name} onChange={this.handleFields} name="first_name" />
                        
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Current Position" value={this.state.current_position} onChange={this.handleFields} name="current_position" />
                        
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Adress line 1" value={this.state.addr_1} onChange={this.handleFields} name="addr_1"/>
                        <input type="text" class="form-control mt-3"  aria-describedby="emailHelp" placeholder="Adress Line 3"  value={this.state.addr_3} onChange = {this.handleFields} name = "addr_3"/>
                    </div>
                    <div className="col-6  form-group ">
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Last Name" value={this.state.last_name} onChange = {this.handleFields} name = "last_name" />
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Phone Number" value={this.state.phone} onChange = {this.handleFields} name = "phone"  />
                        <input type="text" class="form-control mt-3" aria-describedby="emailHelp" placeholder="Adress Line 2"  value={this.state.addr_2} onChange = {this.handleFields} name = "addr_2"/>
                        <input type="email" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Email adress" value={this.state.email} onChange={this.handleFields} name="email" />
                        <input type="text" class="form-control mt-3" required={true} aria-describedby="emailHelp" placeholder="Pin code" value={this.state.pin} onChange = {this.handleFields} name = "pin" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    state:state
})
export default connect(mapStateToProps)(Personal);
