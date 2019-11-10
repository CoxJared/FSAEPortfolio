import React, { Component } from 'react';

import cutplane from './../../img/bcm-cooling/Thermal-2.png';
import streamlines from './../../img/bcm-cooling/streamlines-thumbnail.png';
import heatmap from './../../img/bcm-cooling/top-view-heat-map.png'
import hightemp from './../../img/bcm-cooling/high-temperature-isovolume.png';
import realimg from './../../img/bcm-cooling/pcb out.jpg'

import ProjectPage from './ProjectPage';

export class BcmCooling extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            
            <ProjectPage
            title="Body Control Module Cooling Analysis"
            images={[
                {image: cutplane,
                description:"Cut-away plane displaying heat distribution inside Enclosure"},
                {image: heatmap,
                description:"Heat Map of the base of the board"},
                {image: streamlines,
                description:"Streamlines of air through enclosure"},
                {image: hightemp,
                description:"High Temperature concentrations in Enclosure"},
                {image: realimg,
                description:"Completed Enclosure and board"},]}
            description="The BCM (Body Control Module) is the main board that controls all systems of the car, apart from the motors. The board has 2 microcontrollers for parallel processing of vehicle data, such as pedal position, steering angle, etc. The board also houses safety circuitry for the car, as well as circuitry for the dashboard display, and for CAN communication, the protocol used for communication between the vehicles various systems.  Given the importance of this hardware, its continued functionality is cruicial to the vehicle.  I conducted cooling simulations on the enclosure to ensure that the board is adequately cooled at peak performance.  These simulations displayed not only the distributions of temperatue within the enclosure - neccessary for planning inlets -  but also the peak temperatures within the board, ensuring that no circuitry overheats."
            />
        )
    }
}

export default BcmCooling
