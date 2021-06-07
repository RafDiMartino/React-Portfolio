
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import ReactProjects from "./components/pages/ReactProjects"
import HtmlCssJsProjects from "./components/pages/HtmlCssJsProjects"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/react-projects" component={ReactProjects}/>
          <Route exact path="/html-css-js-projects" component={HtmlCssJsProjects}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
