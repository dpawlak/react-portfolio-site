import React from 'react'
import Projects from './Projects'
import './Project_Item.css'

export default function ProjectItem(props) {
    return (
        <div id="project-box">
            <h1>{props.name}</h1>
        </div>
        
    )
}

const element = <Projects name="Daniel" />