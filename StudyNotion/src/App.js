import "./App.css";
import {Route , Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Common/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import OpenRoute from "./components/core/Auth/OpenRoute"
import About from "./pages/About"
import Contact from "./pages/Contact"
import ForgotPassword from "./pages/ForgotPassword"
import UpdatePassword from "./pages/UpdatePassword"

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        

          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />





















<Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        

     

      </Routes>

      

    </div>
  
  );
}

export default App;
