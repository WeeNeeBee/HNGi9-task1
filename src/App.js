import Profile from "./components/Profile";
import Links from "./components/Links";
import Footer from "./components/Footer";
import AppComps from "./AppComps";
import { Route, Routes } from "react-router-dom";
import Contact from './pages/Contact'
import './App.css'




const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<AppComps />} />
        <Route path="/contact" element = {<Contact />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
