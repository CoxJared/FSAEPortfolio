import React, { Component } from 'react'

import ProfileBox from './../ProfileBox/ProfileBox';

import frontwingimg from './../../img/aerodynamics/new wing.png'

import  './FrontWing.css';


export class FrontWing extends Component {
    render() {
        return (
            <div>
                <ProfileBox />
                <div className="front-wing-showcase">
                    <img src={frontwingimg} className="front-wing-image"></img>/>
                </div>
            </div>
        )
    }
}

export default FrontWing
