import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Navbar from "./Components/Navbar.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";


function App() {
  return (
    <div >
 
   <Router>
    <Routes>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/home" element={<Home></Home>}/>
      <Route path="/nav" element={<Navbar></Navbar>}/>
      <Route path="/about" element={<About></About>}/>
      <Route path="/contact" element={<Contact></Contact>}/>
    </Routes>
   </Router>
  
    


    </div>
  );
}

export default App;
