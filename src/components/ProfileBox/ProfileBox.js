import React, { Component } from 'react'
import './ProfileBox.css';

export class ProfileBox extends Component {
    render() {
        return (
            <div className="profile-box-container">
                <div className="profile-box-name-container">
                    <h1 className="profile-box-name">Jared Cox</h1>
                </div>
                <div className="profile-box-school-container">
                    <h1 className="profile-box-school">McMaster University | Mechanical Engineering 2021</h1>
                </div>
            </div>
        )
    }
}

export default ProfileBox
