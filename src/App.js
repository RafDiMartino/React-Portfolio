
import './App.css';
import Footer from './components/Footer';
import MainSection from './components/MainSection';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router >
      <div className="App">
        <Navbar />
        <MainSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
