import React from 'react';
import './Projects.css'
import {IconButton} from '@material-ui/core';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import RemoveIcon from '@material-ui/icons/Remove';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import AppsIcon from '@material-ui/icons/Apps';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WebIcon from '@material-ui/icons/Web';
import StorageIcon from '@material-ui/icons/Storage';
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';

class Projects extends React.Component {
    render() {
        return (
            
            <div className='File'>
                <div className='sidebar__header'>
                    <IconButton>
                        <OpenWithIcon />
                    </IconButton>

                    <IconButton>
                        <RemoveIcon />
                    </IconButton>

                    <IconButton>
                        <AspectRatioIcon />
                    </IconButton>

                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                </div>   

                
                <div className="Footbar-container">
                    <div className="container">
                        <h1>Welcome to Operating System</h1>
                    </div>
                    <hr />
                    
                    <div className="option">
                        <IconButton>
                            <DashboardIcon />
                            <a>Dashboard</a>
                        </IconButton>
                    </div>

                    <div className="option">
                        <IconButton>
                            <WebIcon />
                            <a>Browser</a>
                        </IconButton>
                    </div>

                    <div className="option">
                        <IconButton>
                            <StorageIcon />
                            <a>Storage</a>
                        </IconButton>
                    </div>

                    <div className="option">
                        <IconButton>
                            <TimelineIcon />
                            <a>Analytics</a>
                        </IconButton>
                    </div>    

                    <div className="option">
                        <IconButton>
                            <ChatIcon />
                            <a>Communications</a>
                        </IconButton>
                    </div>

                    <div className="option">
                        <IconButton>
                            <SettingsIcon />
                            <a>Settings</a>
                        </IconButton>
                    </div>    

                    

                </div>

            </div>
            
        )
    }
}
export default Projects
