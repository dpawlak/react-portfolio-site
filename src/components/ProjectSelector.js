import React from 'react'
import "./ProjectSelector.css"
import imageOne from "../images/django-certificate.jpg"
import imageTwo from "../images/project-1.png"
import imageThree from "../images/react-logo.jpg"
import imageFour from "../images/django-certificate.jpg"

class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        category: "Select",
        image: <p>Hello world.</p>
      };
      this.toggleOne = this.toggleOne.bind(this)
      this.toggleTwo = this.toggleTwo.bind(this)
      this.toggleThree = this.toggleThree.bind(this)
      this.toggleFour = this.toggleFour.bind(this)
    }
    toggleOne() {
      this.setState({ 
        category: 'System description...',
        image: (
          <div id="sysImg">
            <img src={imageOne} id="project-selector-img"/>
          </div>
        )
      })
    }
    toggleTwo() {
      this.setState({ 
        category: 'Frame description...',
        image: (
          <div id="sysImg">
            <img src={imageTwo} id="project-selector-img"/>
          </div>
        )
      })
    }
    toggleThree() {
      this.setState({ 
        category: 'Library description...',
        image: (
          <div id="sysImg">
            <img src={imageThree} id="project-selector-img"/>
          </div>
        )
      })
    }
    toggleFour() {
      this.setState({ 
        category: 'Category description...',
        image: (
          <div id="sysImg">
            <img src={imageFour} id="project-selector-img"/>
          </div>
        )
      })
    }

    render() {
      return (
        <div>


        <div id="project-selector-header">
          <ul id="project-selector-btn-list">
          <li onClick={this.toggleOne}>
            <a>System</a>
          </li>
          <li onClick={this.toggleTwo}>
          <a>Frame</a>  
          </li>
          <li onClick={this.toggleThree}>
            <a>Library</a>
          </li>
          <li onClick={this.toggleFour}>
            <a>Category</a>
          </li>
          </ul>
        </div>  
        
        <div id="project-selector-footer">
          <div className="row">
            <div className="col-md-6">
              <p>Caption: {this.state.category.toString()}</p>
            </div>
            <div className="col-md-6">
              {this.state.image}
            </div>
          </div>            
        </div>


        </div>
      );
    }

  
}  
 
  export default Car

  