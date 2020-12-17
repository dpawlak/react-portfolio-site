import './App.css';
import Menu from './components/Menu/Menu'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Menu />
        <Projects /> 
      </div>
    </div>
  );
}

export default App;
