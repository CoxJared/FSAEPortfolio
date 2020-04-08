import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.jpg';
import aerodynamicThumbnail from './../../img/aerodynamics/thumbnail.png';
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import frontwingThumbnail from './../../img/aerodynamics/new wing.png';
import assemblyThumbnail from './../../img/accumulatorassembly/full-accumulator.png';
import bcmcoolingThumbnail from './../../img/bcm-cooling/Thermal-2.png';
import swanneckThumbnail from './../../img/swannecks/finished.PNG';
import coolingLoopThumbnail from './../../img/cooling/motor cooling loop.png';
import futureconcept from './../../img/future-concepts/Untitled.JPG';
import vinylwrap from './../../img/vinylwrap/darker.JPG';
import drawthumbnail from './../../img/drawings/thub.png';

export class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {name:"2020 Livery",
                type:"modelling",
                thumbnail:vinylwrap,
                link:"/livery"},
                {name:"Wiring Harness",
                type:"modelling",
                thumbnail:wireharnessThumbnail,
                link:"/wiringharness"},
                {name:"Technical Drawings",
                type:"modelling",
                thumbnail:drawthumbnail,
                link:"/drawings"},
                {name:"Design Concepts",
                type:"modelling",
                thumbnail:futureconcept,
                link:"/concepts"},
                {name:"Aerodynamic Development",
                type:"modelling",
                thumbnail:aerodynamicThumbnail,
                link:"/aerodynamics"},
                {name:"Accumulator Assembly Documentation",
                type:"modelling",
                thumbnail:assemblyThumbnail,
                link:"/accumulatorassembly"},
                {name:"BCM Cooling Analysis",
                type:"modelling",
                thumbnail:bcmcoolingThumbnail,
                link:"/pcbcooling"},
                {name:"Cooling Loop Model",
                type:"modelling",
                thumbnail:coolingLoopThumbnail,
                link:"/coolingloop"},
                {name:"Composite Optimization",
                type:"modelling",
                link:"/swannecks",
                thumbnail:swanneckThumbnail},
                {name:"Front Wing Analysis",
                type:"modelling",
                thumbnail:frontwingThumbnail,
                link:"/frontwing"},
                {name:"Team Website",
                type:"website",
                link:"https://macformularacing.com/",
                thumbnail:websiteThumbnail},
                
            ]
        }
    }


    render() {
        return (
            <div className="projects-container">
                {this.state.projects.map(project => (
                    <div className="projects-project-link-container">
                    <ProjectLink 
                    project={project}
                    />
                </div>))}   
                {window.innerWidth > 900 ? 
                <>
                <div className="projects-project-link-container"/>
                </>
                :
                <div/>}
            </div>
        )
    }
}

export default Projects
