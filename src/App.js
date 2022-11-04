import Footer from "./components/Footer";
import AppComps from "./AppComps";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from './pages/Contact'
import './App.css'




const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<AppComps />} />
          <Route path="/contact" element = {<Contact />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
