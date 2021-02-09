import React from 'react'
import "./Home.css"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import Avatar from '@material-ui/core/Avatar'

export default function Testing() {
    return (
        <div className="body">
            
            <div className="hero">
                <h1>Daniel Pawlak</h1>
                <h3>Web Developer</h3>
                <center><Avatar id="avatar"/></center>
                <ul className="icons">
                    <li>
                        <LinkedInIcon />
                    </li>
                    <li>
                        <GitHubIcon />
                    </li>
                    <li>
                        <EmailIcon />
                    </li>
                </ul>

                <p className="lead">
                    Welcome, I am an independant and organized developer.
                    Please take a look at my projects.
                </p>
                

                <a href="#skills" className="begin">
                    Begin
                </a>
                <hr/>
            </div>

            <div className="skills">
                <h1 id="skills">Skills</h1>
                <p>Lorem ipsum blah blah blah</p>
            </div>


        </div>
    )
}