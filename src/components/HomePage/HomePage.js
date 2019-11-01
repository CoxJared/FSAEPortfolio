import React, { Component } from 'react'
import ProfileBox from './../ProfileBox/ProfileBox';
import Formula from './../Formula/Formula';

export class HomePage extends Component {
    render() {
        return (
            <div>
                <ProfileBox home="is-home"/>
                <Formula />
            </div>
        )
    }
}

export default HomePage
