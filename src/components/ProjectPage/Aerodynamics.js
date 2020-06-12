import React, { Component } from 'react'


import topdown from './../../img/aerodynamics/full-sim.png'
import highlight from './../../img/aerodynamics/just-aero.png';
import onfloor from './../../img/aerodynamics/aero on floor.jpg';
import real from './../../img/aerodynamics/me-in-car.jpeg';
import frontwing from './../../img/front wing/front-wing-streamlines.png';

import sidepod from './../../img/aerodynamics/side-pod-vac.jpeg';
import undertray from './../../img/aerodynamics/undertray-carbon.jpeg';

import ProjectPage from './ProjectPage';

export class Aerodynamics extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Aerodynamic Manufacturing"
            images={[
                {image: highlight,
                description:"Model of our vehicle's 2019 aerodynamic package"},
                {image: sidepod,
                description:"Side pod bagged and ready for vacuum infusion"},
                {image: undertray,
                    description:"Undertray carbon layed up"},
                // {image: sidepodlayup,
                // description:"Side pod being layed up for infusion"},
                {image: onfloor,
                description:"Completed aero-pack components"},
                {image: real,
                description:"Me sitting in the 2019 car with a completed aero pack"}]}
            description="In the 2019 season my primary responsibility was in manufacturing all the aerodynamic components.  Using the VARTM manufacturing method, i created custom molds and manufactured the carbon-fibre (CFRP - Carbon Fibre Reinforced Polymer) components for the aerodynamic package.  The components i was responsible for manufacturing were; front wing, side pods, nose cone, undertray and rear wing."
            />
        )
    }
}

export default Aerodynamics
