import React, { Component } from 'react'
import ProjectPage from './ProjectPage';
import front from './../../img/drawings/front.png'
import top from './../../img/drawings/top.png'
import side from './../../img/drawings/side.png'

export class Drawings extends Component {
    render() {
        return (
            <ProjectPage
            title="2020 Livery"
            images={[
                {image: front,
                description:"Left View"},
                {image: top,
                description:"Front View"},
                {image: side,
                    description:"Right View",}
                
            ]}
            description="Teams are requires to submit formal design documentation for competition, including overview of the vehicle systems and drawings to illustrate design features.  I created these drawings to give an overview of of vehicle and provide insight into some of the technical aspects that make our vehicle innovative and unique."
            />
        )
    }
}

export default Drawings
