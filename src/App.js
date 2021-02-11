import React from "react";
import "./App.css";
import Testing from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

export default function App() {
  return (
    <div className="app-container">
      
      <Testing />  
      <Skills />
      <Projects />
    </div>
  );
}

