import React from 'react'
import ProjectItem from './Project_Item'
import "./Projects.css"

export default function Projects() {
    return (
        <div>
            <hr />
            <h2 style={{margin:25}}>Projects</h2>
            <div className="projects" id="projects">
                <ProjectItem name="Dashboard" />
                <ProjectItem name="Store" />
                <ProjectItem name="Project 3" />
                <ProjectItem name="Project 4" />
                <ProjectItem name="Project 5" />
            </div>

        </div>
        
    )
} 

