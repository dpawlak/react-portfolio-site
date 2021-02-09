import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
  } from "react-router-dom";

import {Navbar, Nav} from 'react-bootstrap'
import "./Navigation.css"
import Testing from "./Home"

export default function NavigationBar() {
    return (
        <div>
            <Router>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink to="/" className="active-link" activeClassName="active" exact={true} >Daniel Pawlak</NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <NavLink to="/skills" className="active-link" activeClassName="active" exact={true}>Skills</NavLink>
                    <NavLink to="/topics" className="active-link" activeClassName="active" exact={true}>Pricing</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink  to="/topics" className="active-link" activeClassName="active" exact={true}>Pricing</NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/skills">
                    <Skills />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

function Home() {
    return (
      <div>
       <Testing />
      </div>
    );
  }
  
  function Skills() {
    return (
      <div>
        <h2>Skills</h2>
      </div>
    )
  }

  function Topics() {
    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <NavLink to={`${url}/rendering`}>Rendering with React</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/components`}>Components</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/props-v-state`}>Props v. State</NavLink>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }
  
  function Topic() {

    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }