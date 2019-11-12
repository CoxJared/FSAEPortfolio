import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import position from './../../img/swannecks/position.png';
import setup from './../../img/swannecks/mesh.PNG';
import fea from './../../img/swannecks/fea.PNG';
import done from './../../img/swannecks/postmesh.PNG';
import layup from './../../img/swannecks/layup.PNG';

export class SwanNecks extends Component {
    render() {
        return (
            <ProjectPage
            title="Carbon-Composite Swan Necks"
            images={[
                {image: position,
                description:"Position of swan necks"},
                {image: setup,
                description:"Mesh of swan neck used for analysis"},
                {image: fea,
                description:"FEA conducted on mounts"},
                {image: done,
                    description:"Optimized layup construction of mount"},
                {image: layup,
                description:"Example of a few optimized plys of the composite mounts"},
                
            ]}
            description="The supports used for the rear wing of the vehicle are custom swan necks.  This top-mounting solution is used to ensure that the air flowing under the wing is as clean as possible, as it is the primary producer of downforce.  Carbon-fibre reinforced polymer was chosen for a lightwieght characteristics and stiffness.  The stresses acting on the mounts were found from CFD analysis conducted on the rear wing to calculate maximum and average stresses.  The layup was found using Finite Element Analysis and optimization in Altair Hyperworks.  Analysis was done in Hypermesh, post-processing done in Hyperview and Optistruct was used as the solver."
            />
        )
    }
}

export default SwanNecks
