import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component Imports
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Book from "./components/Book";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
    </div>
  );
}

export default App;

//vertical-align: middle;
