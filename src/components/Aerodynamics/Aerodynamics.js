import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';

import topdown from './../../img/aerodynamics/top-down-streamlines.png'

import './Aerodynamics.css';

export class Aerodynamics extends Component {
    render() {
        return (
            <div>
                <ProfileBox />

                <div className="wiring-harness-showcase">
                    <img src={topdown} className="wiring-harness-image"></img>/>
                </div>


            </div>
        )
    }
}

export default Aerodynamics
