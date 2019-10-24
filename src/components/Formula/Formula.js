import React, { Component } from 'react'
import './Formula.css';
import Projects from '../Projects/Projects';

export class Formula extends Component {
    render() {
        return (
            <div className="formula-container">
                <div className="formula-name-container">
                    <h1 className="formula-name">MAC Formula Electric <span className="projects-title">projects</span></h1>
                </div>
                <Projects />
                
            </div>
        )
    }
}

export default Formula
