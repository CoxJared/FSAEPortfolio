import React, { Component } from 'react'
import ProfileBox from './../ProfileBox/ProfileBox';
import Formula from './../Formula/Formula';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ProfileBox />
                <Formula />
            </div>
        )
    }
}

export default HomePage
