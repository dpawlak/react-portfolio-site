import React from 'react'
import "./Skills.scss"

export default function Skills() {
    return (

<div className="skills" id="skills">
    <div className="skills-div">
        <div className="vertical-center">

            <div className="row">
                <div className="col-md-3" id="skill-box">
                    <div className="card">
                        <h1>Server</h1>
                        <ul>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Node</li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-3" id="skill-box">
                    <div className="card">
                        <h1>Front End</h1>
                        <ul>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-3" id="skill-box">
                    <div className="card">
                        <h1>Database</h1>
                        <ul>
                            <li>MySql</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>    
                    </div>
                </div>
                <div className="col-md-3" id="skill-box">
                    <div className="card">
                        <h1>Deployment</h1>
                        <ul>
                            <li>Heroku</li>
                            <li>Netlify</li>
                            <li>GH Pages</li>
                        </ul>    
                    </div>
                </div>



                
            </div>        
        </div>               
    </div>
</div>

    )
}