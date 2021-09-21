import { useEffect } from "react"
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from './pages/Home';
import ReactProjects from "./pages/ReactProjects"
import HtmlCssJsProjects from "./pages/HtmlCssJsProjects"
import NavBar from "./components/navbar/NavBar";
import {HashRouter as Router, Switch, Route, withRouter, useLocation} from "react-router-dom"

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <ScrollToTop>
            <Route exact path="/" component={Home}/>
            <Route exact path="/react-projects" component={ReactProjects}/>
            <Route exact path="/html-css-js-projects" component={HtmlCssJsProjects}/>
          </ScrollToTop>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
