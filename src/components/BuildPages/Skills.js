import React, { Component } from 'react'
import { connect } from 'react-redux';
import { skill_submit } from '../../action/build';
import { store } from '../../store';

export class Skills extends Component {
    constructor(props){
        super(props);
        this.state={
            skill_field:"",
            suggestions:[],
            added_skills:[],
            skill_samples:['python', 'JavaScript','Java','java5', 'HTML', 'SCSS/CSS','Node Js', 'React Js', 'React Native', 'Django', 'SQL', 'MongoDB' ]
    
        }
    }

    
    search_querY = (value) =>{
        const { skill_samples } = this.state;
        if(value.length > 3){
            const skill = skill_samples.filter(item=> item.toLowerCase().includes(value) ? item : null);
            let list = [].concat(skill)
            this.setState({suggestions:[...list]})
        }

        else{
            this.setState({suggestions:""})
        }
        
    }
    handleFields=(e)=>{
        e.preventDefault();
        this.setState({
            skill_field:e.target.value
        })
        this.search_querY(e.target.value);
    }
    
    
    submit = (e) =>{
        e.preventDefault();
        store.dispatch(skill_submit(this.state.added_skills));
        
    }
    
    addSkills = (item) =>{
        let skills = [].concat(item)
        this.setState(prevState=>({
            added_skills:[...prevState.added_skills, ...skills]
        }))
    }
    removeAddedSkills = (item) =>{
        console.log(item, "popo")
        let added_skills = [...this.state.added_skills];
        var index = added_skills.indexOf(item);
        if (index > -1) {
            added_skills.splice(index, 1);
        }
        this.setState({added_skills});
    }
    componentDidUpdate(prevProps, nextState){
        if(prevProps !== this.props){
            if(this.props.state.buildReducer.skill !== null){
                const { changeTab, currentTab } = this.props;
                changeTab(currentTab + 1)
            }
        }
    }
    render() {
        return (
            <div className="container mt-5 border d-flex flex-column align-items-center">
                <p className="display-4" >Please tell us about your experience</p>
                <div className="mt-5 col-md-6 col-sm-12" style={{height:'200px' }}>
                    {this.state.added_skills.map(item=>(
                        <span className="p-1 border bg-success text-light"  >{item}<i style={{cursor:'pointer'}}  onClick={()=>this.removeAddedSkills(item)} >&times;</i></span>
                    ))}
                    <input type="text" class="form-control mt-2"  aria-describedby="skills" placeholder="Eg: JavaScript" value={this.state.skill_field} onChange={(e)=>this.handleFields(e)} name="skill_field" />
                </div>
                <div className="container col-6 mt-2" style={{maxHeight:'100px', overflowY:'scroll', float:'left'}}>
                {this.state.suggestions ?(
                    this.state.suggestions.map(item=>(
                        <div onClick={()=>this.addSkills(item)} className="rounded border-bottom " style={{cursor:'pointer'}}  >{item}</div>
                    ))
                ) :null}        
                </div>
                <div className="container d-flex justify-content-center mt-4">
                <button onClick={(e)=>this.submit(e)} class="btn btn-primary mx-2">Submit</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>({
    state:state
})
export default connect(mapStateToProps)(Skills);
