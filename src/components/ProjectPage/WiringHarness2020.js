import React, { Component } from 'react'
import ProjectPage from './ProjectPage';
import tufast from './../../img/newwiringharness/newer-cutaway.png';
import fullshot from './../../img/newwiringharness/full.png';
import pedaltray from './../../img/newwiringharness/oedal-tray.png';
import lvbcm from './../../img/newwiringharness/lv-bcm.png';
import inverters from './../../img/newwiringharness/inverters.JPG';

export class WiringHarness2020 extends Component {
    render() {
        return (
            <ProjectPage 
            title="Wiring Harness Model and Routing"
            images={[
                {image:tufast,
                    description:"SolidWorks Photoview 360 Render: View of Routing throughout the vehicle"},
                {image:fullshot,
                description:"Full view of the Wiring Harness Model"}, 
                {image:pedaltray,
                description:"Pedal Tray and Raspberyy Pi Enclusure routing"}, 
                {image:lvbcm,
                description:"LV BCM and Dashboard routing"}, 
                {image:inverters,
                description:"Routing for the inverters and motor controllers"}]}
                description="The 2020 Wiring harness model is an iteration on the previous year's, including more detail to better prepare all the routing neccessary for the vehicle.  Some additions are the inline connectors, fuse panel wiring and proper twisted pairs to better manage the routing. Also the Inverter and Motor controller wiring better represent the physical connections and routing.  The main changes made to the electronics that called for an updated harness model were updates on the LV and HV control with new enclosures and different positions in the vehicle, and also different locations for the LV battery and fuse panel."/>
        )
    }
}

export default WiringHarness2020
