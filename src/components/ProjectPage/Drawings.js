import React, {
    Component
} from 'react'
import ProjectPage from './ProjectPage';
import front from './../../img/drawings/front.png'
import top from './../../img/drawings/top.png'
import side from './../../img/drawings/side.png'

export class Drawings extends Component {
    render() {
        return ( <
            ProjectPage title = "Technical Drawings"
            images = {
                [{
                        image: front,
                        description: "Front View"
                    },
                    {
                        image: top,
                        description: "Top View"
                    },
                    {
                        image: side,
                        description: "Left View",
                    }

                ]
            }
            description = "Teams are required to submit formal design documentation for competition, including an overview of the vehicle systems and drawings to illustrate design features.  I created these drawings to give an overview of our vehicle and provide insight into some of the technical aspects that make our vehicle innovative and unique." /
            >
        )
    }
}

export default Drawings