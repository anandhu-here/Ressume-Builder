import React, { Component } from 'react'
import { connect } from 'react-redux';
import './res.css';
export class Resume_1 extends Component {
    state = {
        personal_data:null,
        education:null,
        experience:null,
        skill:null

    }
    componentDidMount(){
        const {personal_data, education, experience, skill} = this.props.state.buildReducer;
        this.setState({personal_data, education, experience, skill});

    }
    render() {
        var resume;
        this.state.personal_data === null ? resume = <div className="display-5">Loading</div> : resume=(
            <>
            <section id="main">
                <header id="title">
                    <h1>{this.state.personal_data.first_name + " " + this.state.personal_data.last_name}</h1>
                    <span class="subtitle">{this.state.personal_data.current_position}</span>
                </header>
                <section class="main-block">
                    <h2>
                    <i class="fa fa-suitcase"></i> Experiences
                    </h2>
                    {this.state.experience.map(item=>(
                        <section class="blocks">
                        <div class="date">
                            <span>{ new Date(item.start).getFullYear() }</span><span>{new Date(item.end).getFullYear()}</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                            <h3>{item.designation}</h3>
                            <span class="place">{item.company}</span>
                            <span class="location">(remote)</span>
                            </header>
                            <div>
                            <ul>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac. Maecenas viverra tortor eget convallis vestibulum. Donec pulvinar venenatis est, non sollicitudin metus laoreet sed. Fusce tincidunt felis nec neque aliquet porttitor</li>
                            </ul>
                            </div>
                        </div>
                        </section>
                    ))}
                    
                </section>
                <section class="main-block">
                    <h2>
                    <i class="fa fa-folder-open"></i> Demo Section
                    </h2>
                    <section class="blocks">
                    <div class="date">
                        <span>2015</span><span>2016</span>
                    </div>
                    <div class="decorator">
                    </div>
                    <div class="details">
                        <header>
                        <h3>Some Project 1</h3>
                        <span class="place">Some workplace</span>
                        </header>
                        <div>
                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio. Vestibulum dapibus pharetra odio, egestas ullamcorper ipsum congue ac</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec mi ante. Etiam odio eros, placerat eu metus id, gravida eleifend odio</li>
                        </ul>
                        </div>
                    </div>
                    </section>
                    
                </section>
                <section class="main-block concise">
                    <h2>
                    <i class="fa fa-graduation-cap"></i> Education
                    </h2>
                    {this.state.education.map(item=>(
                        <section class="blocks">
                        <div class="date">
                            <span>{new Date(item.start).getFullYear()}</span><span>{new Date(item.end).getFullYear()}</span>
                        </div>
                        <div class="decorator">
                        </div>
                        <div class="details">
                            <header>
                            <h3>{item.degree}</h3>
                            <h3>{item.subject}</h3>
                            <span class="place">{item.University}</span>
                            <span class="location">(remote)</span>
                            </header>
                            <div>
                            <ul>
                                <li>Marks scored : {item.marks}</li>
                            </ul>
                            </div>
                        </div>
                        </section>
                    ))}
                    
                </section>
                </section>
                <aside id="sidebar">
                <div class="side-block" id="contact">
                    <h1>
                    Contact Info
                    </h1>
                    <ul>
                    <li><i class="fa fa-globe"></i>{this.state.personal_data.addr_1}</li>
                    <li><i class="fa fa-globe"></i>{this.state.personal_data.addr_2}</li>
                    <li><i class="fa fa-globe"></i>{this.state.personal_data.addr_3}</li>
                    <li><i class="fa fa-linkedin"></i> {this.state.personal_data.pin}</li>
                    <li><i class="fa fa-envelope"></i> {this.state.personal_data.phone}</li>
                    
                    </ul>
                </div>
                <div class="side-block" id="skills">
                    <h1>
                    Skills
                    </h1>
                    <ul>
                    {this.state.skill.map(item=>(
                        <li>{item}</li>
                        
                    ))}
                    </ul>
                    
                </div>
                <div class="side-block" id="disclaimer">
                    This r&eacute;sum&eacute; was wholly typeset with HTML/CSS &mdash; see <code>git.io/vVSYL</code>
                </div>
                </aside>
                </>
        )
        return (
            <div className="resume-container">
                {resume}
            </div>
        )
    }
}
const mapStateToProps = state =>({
    state:state
})
export default connect(mapStateToProps)(Resume_1);
