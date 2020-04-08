import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import leftside from './../../img/vinylwrap/left.png';
import righside from './../../img/vinylwrap/dark.png';
import front from './../../img/vinylwrap/front.png';
import bothview from './../../img/vinylwrap/twos.png';

export class VinylWrap extends Component {
    render() {
        return (
            <ProjectPage
            title="2020 Livery"
            images={[
                {image: leftside,
                description:"SolidWorks Render: Left View"},
                {image: front,
                description:"SolidWorks Render:Front View"},
                {image: righside,
                    description:"SolidWorks Render:Right View",},
                {image: bothview,
                    description:"SolidWorks Render: 2019 and 2020 Vinyl wraps",}
                
            ]}
            description="The livery is what allows us to display all of the sponsors that have supported us in our season and also makes our vehicle much more aesthetically pleasing for promotional material and competitions.  I designed the 2020 livery design, creating a simple design that highlights our sponsors and works with our unique design features.  The livery is then printed on vinyl and applied to the vehicle.  Wrap design done in Adobe Illustrator and renders done in Soliworks, Photoview 360."
            />
        )
    }
}

export default VinylWrap
