import React from 'react'

import './Project_Item.css'
import image from "../images/project-1.png";

export default function ProjectItem(props) {
    return (
        <div id="project-box">
            <h3>{props.name}</h3>
            
            
            <p>{props.description}</p>
            <img src={image} id="project-img"/>
            <br />
            <ul>
                <li>Skill 1</li>
                <li>Skill 1</li>
                <li>Skill 1</li>
                <li>Skill 1</li>
                <li>Skill 1</li>
            </ul>
            <div style={{marginLeft:25,marginBottom:25}}>
                <a id="demo-btn">Demo</a>
                <a id="code-btn">Code</a>
            </div>
            
        </div>
        
    )
}
