import React, { Component } from 'react'
import { connect } from 'react-redux';
import { education_submit } from '../../action/build';
import { store } from '../../store';

export class Education extends Component {
    state={
        edu:[
            {
                id:1,
                degree:"",
                University:"",
                subject:"",
                start:"",
                end:""
            }
        ]
    }
    handleFields=(e, id)=>{
        const name  = e.target.name;
        let edu = [...this.state.edu];
        edu.map(i=>i.id === id ? i[name] = e.target.value : null);
        this.setState({edu});
    }
    AddFields = (e) =>{
        e.preventDefault();
        this.setState(prevState=>({
            edu:[...prevState.edu, {id:prevState.edu.length+1, degree:"", subject:"", start:"", end:""}]
        }))
    }
    itemDelete = (e,id) =>{
        e.preventDefault();
        let edu = [...this.state.edu];
        let item_pop;
        edu.filter(item=>item.id === id ? item_pop = item:null );
        edu.pop(item_pop);
        this.setState({edu});
    }
    submit = (e) =>{
        e.preventDefault();
        store.dispatch(education_submit(this.state.edu));
        
    }
    componentDidUpdate(prevProps, nextState){
        if(prevProps !== this.props){
            if(this.props.state.buildReducer.education !== null){
                const { changeTab, currentTab } = this.props;
                changeTab(currentTab + 1)
            }
        }
    }
    render() {
        return (
            <div className="container border d-flex flex-column justify-content-center align-items-center mt-5">
                <p className="display-4" >Please fill in your Educational Qualification</p>
                {this.state.edu.map(form=>(
                    <>
                    <form key={form.id} className="mt-5 " onSubmit = {(e)=>this.submit(e)} style={{width:'70%'}}>
                        <div className ="form-group " >
                            <input type="text" className="form-control mt-3" required={true}  aria-describedby="emailHelp" placeholder="Degree" value={form.degree} onChange={(e)=>this.handleFields(e,form.id)} name="degree" />
                            <input type="text" className="form-control mt-3" required={true}  aria-describedby="emailHelp" placeholder="University" value={form.University} onChange={(e)=>this.handleFields(e,form.id)} name="University" />
                            <input type="text" className="form-control mt-3" required={true}  aria-describedby="emailHelp" placeholder="Specialization" value={this.state.subject} onChange={(e)=>this.handleFields(e,form.id)} name="subject" />
                            <label className="mt-3" htmlFor="startdate">Start date</label>
                            <input type="date" classname="form-control " required={true}  id="startdate" aria-describedby="emailHelp" placeholder="start date" value={this.state.start} onChange={(e)=>this.handleFields(e,form.id)} name="start"/>
                            <label htmlFor="enddate" className="mt-3">End date</label>
                            <input type="date" class="form-control " required={true}  aria-describedby="emailHelp" id="enddate" placeholder="end date"  value={this.state.end} onChange = {(e)=>this.handleFields(e,form.id)} name = "end"/>
                        </div>
                        
                        
                    </form>
                    {this.state.edu.length > 1?<button onClick={(e)=>this.itemDelete(e,form.id)} class="btn mx-2 btn-danger">remove</button>:null}
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
export default connect(mapStateToProps)(Education);
