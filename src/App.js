
import './App.css';
import {BrowserRouter as Router,
        Routes,
        Route,} from 'react-router-dom';
import Home from "./pages/home";
import About from './pages/About';
import Pricing from './pages/Pricing';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/pricing" element={<Pricing/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
