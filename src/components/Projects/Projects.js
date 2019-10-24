import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.jpg';
import aerodynamicThumbnail from './../../img/project/aerodynamic-thumbnail.png';
import wireharnessThumbnail from './../../img/project/wireharness-thumbnail.jpg';
import frontwingThumbnail from './../../img/project/frontwing-thumbnail.png';
import monocoqueThumbnail from './../../img/project/monocoque-thumbnail.png';
import assemblyThumbnail from './../../img/project/accumulator-thumbnail.png'

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"Development of Website",
                type:"web",
                thumbnail:websiteThumbnail},
                {name:"Aerodynamic Development",
                type:"modelling",
                thumbnail:aerodynamicThumbnail},
                {name:"Wiring Harness",
                type:"modelling",
                thumbnail:wireharnessThumbnail},
                {name:"Front-wing Development",
                type:"modelling",
                thumbnail:frontwingThumbnail},
                {name:"Monocoque Analysis",
                type:"modelling",
                thumbnail:monocoqueThumbnail},
                {name:"Assembly Animaitons",
                type:"modelling",
                thumbnail:assemblyThumbnail}
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    thumbnail={project.thumbnail}
                    name={project.name}/>
                </div>))}   
                         
            </div>
        )
    }
}

export default Projects
