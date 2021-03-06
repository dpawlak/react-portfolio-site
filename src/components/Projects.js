import React from 'react'
import ProjectItem from './Project_Item'
import Car from "./ProjectSelector"
import "./Projects.css"

export default function Projects() {
    return (
        <div className="container">
            <hr />



        <div className="row">

            <div className="col-md-3">
                <h3 style={{textAlign:'left',textDecoration:'underline', paddingLeft:25}}>Projects</h3>
                <p style={{paddingLeft:25}}>
                    These are projects that I have made and find userful
                    in a work environment. My projects are learned from skills
                    in the courses I have completed. These skills are then combined
                    with a specific purpose in mind. This is how I create web-apps 
                    that can be used for buissinesses.
                </p>
            </div>
            <div className="col-md-9" id="project-feature">
                
                <Car />
            </div>
        </div>
            
            <div className="projects" id="projects">
                <ProjectItem 
                    name="Dashboard" 
                    description={ProjectDescription}
                />
                <ProjectItem name="Store" description={ProjectDescription}/>
                <ProjectItem name="Project 3" description={ProjectDescription}/>
                <ProjectItem name="Project 4" description={ProjectDescription}/>
                <ProjectItem name="Project 5" description={ProjectDescription}/>
            </div>

        </div>
        
    )
} 

const ProjectDescription = (
    "This is a REST API using django rest framework that allows users to enter data and have a real time updating graph."
    )

