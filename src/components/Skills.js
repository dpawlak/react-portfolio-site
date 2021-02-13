import React from 'react'
import "./Skills.scss"
import Avatar from '@material-ui/core/Avatar';


export default function Skills() {
    
    return (   

    <div className="container">

     
        <div className="skills" id="skills">
            <div className="row">
                <div className="col-md-6" id="skill-header">
                    <div className="summary">
                        <h3 style={{textDecoration:'underline', paddingLeft:25}}>Courses</h3>
                        <p style={{margin:25, textAlign:'justify'}} >
                            I have taken courses on <strong style={{color:'red', fontSize:'1.1rem'}}>Udemy</strong> to learn modern
                            web technologies. Every company needs a comfortable
                            mobile application.        
                        </p>
                        <ul style={{listStyleType:"none",paddingLeft:25}}>
                            <li>
                                {/* <Header /> */}
                                <a id="link">Certificate link</a>
                            </li>
                            <li>
                                {/* <Header /> */}
                                <a id="link">Certificate link</a>
                            </li>
                            <li>
                                {/* <Header /> */}
                                <a id="link">Certificate link</a>
                            </li>               
                        </ul> 
                    </div>
                </div>

            
                <div className="col-md-6" id="skill-header">
                    <h3 style={{textDecoration:'underline', paddingLeft:25}}>Skills and Services</h3>
                    <p style={{margin:25, textAlign:'justify'}}>
                        Please take a look at the <u id="decoration-box">services</u> I offer.
                        My technology stack can be sufficiently used to 
                        manage or collaborate on existing apps, engineer new features,
                        and build <strong id="strong-text">Full Stack</strong> projects from the ground up.
                    </p>
                </div>
            

            </div>
            
            <div className="skills-div">  
                <SkillBox name="Server" avatar="PY"/> 
                <SkillBox name="Front-End" avatar="JS" />   
                <SkillBox name="Database" avatar="SQL"/>   
                <SkillBox name="Other" avatar="O"/>              
            </div>

        </div>
        </div>   
    )
}

function SkillBox(props) {
    const numbers = [1,2,3,4,5]
    const listItems = numbers.map((number) => 
        <li>{number}</li>
    )
    return (
        <div className="skill-box" id="skill" >
           <Avatar id="skill-box-avatar" className={props.avatar} >{props.avatar}</Avatar>
           <h3>{props.name}</h3> 
           <div id="skills-list">
                {listItems}            
           </div>        
        </div>
    )
}