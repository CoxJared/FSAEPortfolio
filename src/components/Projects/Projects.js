import React, { Component } from 'react'
import './Projects.css';
import ProjectLink from '../ProjectLink/ProjectLink';

import websiteThumbnail from './../../img/project/website-thumbnail.png';
import aerodynamicThumbnail from './../../img/aerodynamics/just-aero.png';
import wireharnessThumbnail from './../../img/WiringHarness/original.png';
import assemblyThumbnail from './../../img/accumulatorassembly/full-accumulator.png';
// import futureconcept from './../../img/future-concepts/thumbnail.png';
import vinylwrap from './../../img/vinylwrap/side-view.jpeg';
import drawthumbnail from './../../img/drawings/thub.png';
import newwiringthumbnail from './../../img/newwiringharness/newer-cutaway.JPG';
// import batterythumbnail from './../../img/BatteryPackaging/full-cut.png';

export class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: [
                // {name:"Battery Packaging",
                // type:"modelling",
                // thumbnail:batterythumbnail,
                // link:"/batterydesign"},
                {
                    name: "Aerodynamic Manufacturing",
                    type: "modelling",
                    thumbnail: aerodynamicThumbnail,
                    link: "/aerodynamics"
                },
                {
                    name: "2020 Wiring Harness",
                    type: "modelling",
                    thumbnail: newwiringthumbnail,
                    link: "/2020wiringharness"
                },
                {
                    name: "Technical Drawings",
                    type: "modelling",
                    thumbnail: drawthumbnail,
                    link: "/drawings"
                },
                {
                    name: "2019 Wiring Harness",
                    type: "modelling",
                    thumbnail: wireharnessThumbnail,
                    link: "/wiringharness"
                },
                // {name:"Design Concepts",
                // type:"modelling",
                // thumbnail:futureconcept,
                // link:"/concepts"}, 

                {
                    name: "Accumulator Assembly Documentation",
                    type: "modelling",
                    thumbnail: assemblyThumbnail,
                    link: "/accumulatorassembly"
                },

                // {name:"BCM Cooling Analysis",
                // type:"modelling",
                // thumbnail:bcmcoolingThumbnail,
                // link:"/pcbcooling"},
                // {name:"Cooling Loop Model",
                // type:"modelling",
                // thumbnail:coolingLoopThumbnail,
                // link:"/coolingloop"},
                // {name:"Composite Optimization",
                // type:"modelling",
                // link:"/swannecks",
                // thumbnail:swanneckThumbnail},
                // {name:"Front Wing Analysis",
                // type:"modelling",
                // thumbnail:frontwingThumbnail,
                // link:"/frontwing"},
                {
                    name: "Team Website",
                    type: "website",
                    link: "https://macformularacing.com/",
                    thumbnail: websiteThumbnail
                },
                {
                    name: "Livery Design",
                    type: "modelling",
                    thumbnail: vinylwrap,
                    link: "/livery"
                },

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
                        {/* <div className="projects-project-link-container"/> */}
                        {/* <div className="projects-project-link-container"/> */}
                    </>
                    :
                    <div />}
            </div>
        )
    }
}

export default Projects
