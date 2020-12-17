import React from 'react'
import './Menu.css'
import {Avatar, IconButton} from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import SidebarProjects from '../SidebarProjects/SidebarProjects';
import SidebarSkills from '../SidebarSkills/SidebarSkills';

class Menu extends React.Component {
    render() {
        return (
            <div className='sidebar'>
                <div className='sidebar__header'>
                    <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" />
                    <div className='sidebar__headerRight'>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                        
                        <IconButton>
                            <GitHubIcon />
                        </IconButton>

                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                    </div>

                    
                </div>
                
                <div className="sidebar__skills">
                    <SidebarSkills />
                </div>


                <div className="sidebar__chats">
                    <SidebarProjects />
                    <SidebarProjects/>
                    <SidebarProjects /> 
                    <SidebarProjects/>
                    <SidebarProjects /> 
                </div>
            </div>
        )
    }
}

export default Menu