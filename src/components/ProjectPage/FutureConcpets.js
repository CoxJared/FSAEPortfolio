import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import mainpic from './../../img/future-concepts/20k Render.png'
import gearbox from './../../img/future-concepts/naked.png';
import cooling from './../../img/future-concepts/cooling Screenshot.png';

export class FutureConcpets extends Component {
    render() {
        return (
            <ProjectPage
            title="Future Design Concepts"
            images={[
                {image:mainpic,
                description:"New Aero Package and Vinyl Wrap Design"},
                {image:gearbox,
                description:"New Gearbox Design"},
                {image:cooling,
                description:"New cooling System"},
            
            ]}
            description="Concepts that can be used to aid in the design of future components. I designed these concepts to provide different directions to take our designs in the future. Some of the design ideas include new designs for the wings of the car; using integrated endplates into the main foil, and also new cooling systems for the car to optimize space on the sides of the vehicle."/>
        
        )
    }
}

export default FutureConcpets
