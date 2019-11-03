import React, { Component } from 'react'


import topdown from './../../img/aerodynamics/full-sim.png'
import sidepodlayup from './../../img/aerodynamics/side-pod-layup.png';
import highlight from './../../img/aerodynamics/test.png';
import real from './../../img/aerodynamics/sawhorses.png';

import ProjectPage from './ProjectPage';

export class Aerodynamics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Aerodynamic Development"
            images={[highlight, topdown, sidepodlayup, real]}
            description="Leading the aeroydnamic subteam, we design and manufacture components to increase our vehicles performance - increasing downforce to allow better handling around corners and reducing drag to increase efficiency. In the 2019 season my primary responsibility was in manufacturing the components.  Using the "
            />
        )
    }
}

export default Aerodynamics
