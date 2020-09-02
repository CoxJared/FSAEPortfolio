import React, {
    Component
} from 'react'
import ProjectPage from './ProjectPage';

import mainpic from './../../img/future-concepts/20k Render.png'
import gearbox from './../../img/future-concepts/naked.png';
import packing from './../../img/future-concepts/topless.png';
import cooling from './../../img/future-concepts/cooling Screenshot.png';
import offblue from './../../img/future-concepts/final off-blue png.png';

export class FutureConcpets extends Component {
    render() {
        return ( <
            ProjectPage title = "Future Design Concepts"
            images = {
                [{
                        image: gearbox,
                        description: "New Gearbox reduction Design"
                    },
                    {
                        image: packing,
                        description: "Gearbox packaging"
                    },
                    {
                        image: mainpic,
                        description: "New Aero Package and Vinyl Wrap Design"
                    },
                    {
                        image: offblue,
                        description: "New Aero Package and Vinyl Wrap Design"
                    },

                    {
                        image: cooling,
                        description: "New cooling System"
                    },

                ]
            }
            description = "These are concepts that can be used to aid in the design of future components. I designed these concepts to provide different directions to take our designs in the future. Some of the design ideas include new designs for gearbox packaging and reduction, and designs for the wings of the car; using integrated endplates into the main foil, and also new cooling systems for the car to optimize space on the sides of the vehicle." / >

        )
    }
}

export default FutureConcpets