import React, { Component } from 'react'
import { connect } from 'react-redux';
import { experience_submit } from '../../action/build';
import { store } from '../../store';

export class Experience extends Component {
    state={
        exp:[
            {
                id:1,
                company:"",
                designation:"",
                start:"",
                end:""
            }
        ]
    }
    handleFields=(e, id)=>{
        const name  = e.target.name;
        let exp = [...this.state.exp];
        exp.map(i=>i.id === id ? i[name] = e.target.value : null);
        this.setState({exp});
    }
    AddFields = (e) =>{
        e.preventDefault();
        this.setState(prevState=>({
            exp:[...prevState.exp, {id:prevState.exp.length+1, company:"", designation:"", start:"", end:""}]
        }))
    }
    itemDelete = (e,id) =>{
        e.preventDefault();
        let exp = [...this.state.exp];
        let item_pop;
        exp.filter(item=>item.id === id ? item_pop = item:null );
        exp.pop(item_pop);
        this.setState({exp});
    }
    submit = (e) =>{
        e.preventDefault();
        store.dispatch(experience_submit(this.state.exp));
        
    }
    componentDidUpdate(prevProps, nextState){
        if(prevProps !== this.props){
            if(this.props.state.buildReducer.experience !== null){
                const { changeTab, currentTab } = this.props;
                changeTab(currentTab + 1)
            }
        }
    }
    render() {
        return (
            <div className="container border d-flex flex-column justify-content-center align-items-center">
                <p className="display-4" >Please tell us about your experience</p>
                {this.state.exp.map(form=>(
                    <>
                    <form key={form.id} className="mt-5 " onSubmit = {(e)=>this.submit(e)} style={{width:'70%'}}>
                        <div className ="form-group " >
                            <input type="text" class="form-control mt-3"  aria-describedby="emailHelp" placeholder="Company" value={form.company} onChange={(e)=>this.handleFields(e,form.id)} name="company" />
                            <input type="text" class="form-control mt-3"  aria-describedby="emailHelp" placeholder="Designation" value={this.state.designation} onChange={(e)=>this.handleFields(e,form.id)} name="designation" />
                            <label className="mt-3" for="startdate">Joined date</label>
                            <input type="date" class="form-control "  id="startdate" aria-describedby="emailHelp" placeholder="start date" value={this.state.start} onChange={(e)=>this.handleFields(e,form.id)} name="start"/>
                            <label for="enddate" className="mt-3">End date</label>
                            <input type="date" class="form-control "  aria-describedby="emailHelp" id="enddate" placeholder="end date"  value={this.state.end} onChange = {(e)=>this.handleFields(e,form.id)} name = "end"/>
                        </div>
                        
                        
                    </form>
                    <button onClick={(e)=>this.itemDelete(e,form.id)} class="btn mx-2 btn-danger">remove</button>
                    </>
                ))}
                <div className="container d-flex justify-content-center mt-4">
                <button onClick={(e)=>this.AddFields(e)} class="btn mx-2 btn-outline-primary">Add more</button>
                <button onClick={(e)=>this.submit(e)} class="btn btn-primary mx-2">Submit</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    state:state
})
export default connect(mapStateToProps)(Experience);
