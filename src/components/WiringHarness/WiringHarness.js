import React, { Component } from 'react'
import ProfileBox from '../ProfileBox/ProfileBox';

import wiringharness from './../../img/WiringHarness/wiring-harness.png';

import './WiringHarness.css';

export class WiringHarness extends Component {
    render() {
        return (
            <div>
                <ProfileBox />
                <div className="wiring-harness-showcase">
                    <img src={wiringharness} className="wiring-harness-image"></img>/>
                </div>
            </div>
        )
    }
}

export default WiringHarness
