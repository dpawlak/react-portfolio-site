import React from "react";
import {useState} from 'react'
import "./App.css";
import Testing from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

import Tasks from "./components/Tasks"

export default function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Testing One',
        day: 'Feb 5th at 2:30PM',
        reminder: false,

    },
    {
        id: 2,
        text: 'Testing Two',
        day: 'Feb 7th at 5:30PM',
        reminder: false,

    },
    {
        id: 3,
        text: 'Testing Three',
        day: 'Feb 12th at 9:30PM',
        reminder: false,

    },
    {
        id: 4,
        text: 'Testing Four',
        day: 'Feb 24th at 11:00PM',
        reminder: false,

    },
]
)
  return (
    <div className="app-container">
      <div className="container">
         
        <Testing />  
        <Skills />
        <Projects />
        <Tasks tasks={tasks}/>
        
      </div>  
    </div>
  );
}

