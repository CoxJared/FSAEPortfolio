import React, { Component } from 'react'
import './ProjectLink.css'

export class ProjectLink extends Component {
    constructor(props){
        super(props)
    }


    render() {
        return (
            <div className="project-link-container">
                <img className="project-thumbnail" src={this.props.thumbnail}/>
                <h1 className="project-name">{this.props.name}</h1>
            </div>
        )
    }
}

export default ProjectLink
