import React, { Component } from 'react'

import ProjectPage from './ProjectPage';

import mainpic from './../../img/cooling/motor cooling loop.png';
import topview from './../../img/cooling/cool top.jpg';
import frontview from './../../img/cooling/cool front view.jpg';
import fullcool from './../../img/cooling/full-flow.jpg';
import jacketflow from './../../img/cooling/CoolingJacketFlow.jpg';

export class Cooling extends Component {
    render() {
        return (
            <ProjectPage
            title="Cooling Loop Model"
            images={[
                {image:mainpic,
                description:"Cooling loop CAD Model render"},
                {image:topview,
                description:"Top view render"},
                {image:frontview,
                description:"Front view render"},
                {image:fullcool,
                description:"Streamlines Through Motor Cooling Loop, Velocity Gradient Shown"},
                {image:jacketflow,
                description:"Streamlines Through Motor Cooling Jackets, Velocity Gradient Shown"},
                
            ]}
            description="Our Vehicle contains two cooling loops; one for the inverter and one for the four in-hub motors.  I created this model so we could efficiently plan the routing throughout the car and communicate how it was to be installed.  In addition, I created the full loop CFD model to analyze the flow, pressure changes and temperature distribution throughout the loops to be further validated with testing." />
        )
    }
}

export default Cooling
