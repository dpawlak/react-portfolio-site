import React from 'react'
import "./Home.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AppsIcon from '@material-ui/icons/Apps'
import SmartphoneIcon from '@material-ui/icons/Smartphone';


export default function Testing() {

    return (
             <div className="slanted-div">
                    <div className="hero">
                        <nav role="navigation">
                            <div id="menuToggle">
                            <input type="checkbox" />
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                <a href="#"><li><AppsIcon /></li></a>
                                <a href="#"><li><GitHubIcon /></li></a>
                                <a href="#"><li><LinkedInIcon /></li></a>
                                <a href="#"><li><MailOutlineIcon /></li></a>
                                </ul>
                            </div>
                        </nav>
          
             
                    
                     
                    <div className="intro">
                        <h1 className="display-3" id="name">Daniel Pawlak</h1>
                        <h1 className="display-4" id="title">Software Engineer</h1>
                        <div id="logo"><SmartphoneIcon style={{ fontSize: 200 }}/></div>
                        <h1 className="display-4" id="title">Bring your bussiness to mobile.</h1>
                        <a href="#skills" id="begin-btn">Begin Mobile App</a>
                    </div>

               
           
                
                </div>

        </div>
    )
}