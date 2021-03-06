import React, { Component } from 'react'
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from 'react-redux'

class DashBoard extends Component {
    render() {

        const { projects } = this.props;

        return ( 
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        //state.project gived us access to the reducer
        // state.projectprojects is the name of a state defined within the reducer
        // the projects will be binded to the props of this component
        projects: state.project.projects
    }
}
export default connect(mapStateToProps)(DashBoard);