import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import cutaway from './../../img/BatteryPackaging/battery-cut.png'
import popup from './../../img/BatteryPackaging/popped out.png'
import modules from './../../img/BatteryPackaging/one module.png'
import inchassis from './../../img/BatteryPackaging/chassis-cut.png';

export class BatteryPackaging extends Component {
    render() {
        return (
            <ProjectPage
            title="Battery Design"
            images={[
                {image: cutaway,
                description:"Photoview 360 Render: Right side off showing cells"},
                {image: popup,
                description:"Single Module lifted out of battery pack"},
                {image: modules,
                    description:"Composite constuction of module enclosure",},
                    {image: inchassis,
                        description:"Battery Packagin in car",}
                
            ]}
            description="This is the design for the next season's battery pack, consisting of 630 18650 Samsung Cells.  The cell selection, cell configuration, BMS selection and PCB development were complete by other members and leads on the team.  My responsibility was in the packaging and integration of all these components into the vehicle.  The ensloure of the battery is made out of a composite material, carbon fibre reinforced polymer.  This ensures weight reduction, adequate stiffness and is manufactured using the vacuum infusion.  The cell module's enclosure also consist of panels of composites; carbon fibre and kevlar to allow the required insulation required by the rules.  The main focus of the design is in the manufacturablility, that is why the indivual cell modules are all very similar and very easy to assemble and install into the pack. Also, the cooling was a big consideration, that is why there are two sets of 4 fans,  pulli in air from the side of the car, forcing it through channels between the cells and along the bus bars and major connections..The full enclosure is design to fit well within the back of the vehicle, allowing for all the tolerances that are assosiated with composite manufacturing."
            />
        )
    }
}

export default BatteryPackaging
