import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Index} from "./component/App/Home/Index";
import { About } from './component/App/About/About';
import { Contact } from './component/App/Contact/Contact';
import { Project } from './component/App/Project/Project';


function App() {
  return (
    
      <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/about-us" element={<About/>} />
          <Route exact path="/contact-us" element={<Contact/>} />
          <Route exact path="/project" element={<Project/>} />
          
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;




