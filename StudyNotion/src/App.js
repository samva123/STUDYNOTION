import "./App.css";
import {Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Common/Navbar"
import Login from "./pages/Login"
import OpenRoute from "./components/core/Auth/OpenRoute"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path="login" element = {
          <Login />}/>

          <Route path="about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />
        

     

      </Routes>

      

    </div>
  
  );
}

export default App;
