import React from 'react'
import "./Skills.scss"
import StorageIcon from '@material-ui/icons/Storage';

export default function Skills() {
    
    return (
        
            
        <div className="skills" id="skills">
       
            <div className="summary">
                <h3 style={{textAlign:'center',textDecoration:'underline'}}>Courses</h3>
                <p>
                    
                    I have taken courses on Udemy to learn modern
                    web technologies. Every company needs a comfortable
                    mobile application.        
                </p>
                <ul>
                    <li>React</li>
                    <li>Node</li>
                    <li>Django</li>
                </ul>
                
            </div>
            
            <h3 style={{textAlign:'center',textDecoration:'underline'}}>Skills and Services</h3>
            <p style={{margin:25, textAlign:'justify'}}>
                Please take a look at the services I offer.
                My technology stack can be sufficiently used to 
                manage or collaborate on existing apps, engineer new features,
                and build full-stack projects from the ground up.
            </p>
            <div className="skills-div">  
                <SkillBox name="Server" skill_1="Node" skill_2="Django" skill_3="REST API" skill_4="Python"/> 
                <SkillBox name="Front-End" skill_1="React" skill_2="Components" skill_3="Props" skill_4="State" />   
                <SkillBox name="Database" skill_1="MySQL" skill_2="MongoDB" skill_3="Firebase" skill_4="Python"/>   
                <SkillBox name="Other" skill_1="GraphQL" skill_2="ChartJS" skill_3="Stripe" skill_4="Invoices"/>              
            </div>

        </div>
        
    )
}

function SkillBox(props) {
    const database = <StorageIcon />


    return (
        <div className="skill-box" id="skill">
           {database}
           <h3>{props.name}</h3> 
           <ul>
               <li>{props.skill_1}</li>
               <li>{props.skill_2}</li>
               <li>{props.skill_3}</li>
               <li>{props.skill_4}</li>
           </ul>
           
        </div>
        
    )
}