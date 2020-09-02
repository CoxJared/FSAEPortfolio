import React, { Component } from 'react'
import ProjectPage from './ProjectPage';

import leftside from './../../img/vinylwrap/side-view.jpeg';
import front from './../../img/vinylwrap/frontal.JPG';
import top from './../../img/vinylwrap/iso-ish.JPG';

export class VinylWrap extends Component {
    render() {
        return (
            <ProjectPage
            title="2020 Livery Design"
            images={[
                {image: leftside,
                description:"SolidWorks Render: Left View"},
                {image: top,
                    description:"SolidWorks Render:Semi-Iso View",},
                {image: front,
                description:"SolidWorks Render:Close-up"},

                
            ]}
            description="The livery is what allows us to display all of the sponsors that have supported us in our season and also makes our vehicle much more aesthetically pleasing for promotional material and competitions.  I designed the 2020 livery, creating a simple design that highlights our sponsors and works with our unique design features.  The livery is then printed on vinyl and applied to the vehicle.  Wrap design done in Adobe Illustrator and renders done in SoliWorks, PhotoView 360. 'ZAPDOS' is the name of the vehicle."
            />
        )
    }
}

export default VinylWrap
