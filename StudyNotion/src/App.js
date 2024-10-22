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
import VerifyEmail from "./pages/VerifyEmail"
import Dashboard from "./pages/Dashboard"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import MyProfile from "./components/core/Dashboard/MyProfile"
import Settings from "./components/core/Dashboard/Settings"
import EnrolledCourses from "./components/core/Dashboard/EnrolledCourses"
import Cart from "./components/core/Dashboard/Cart"
import Catalog from "./pages/Catalog"

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        

          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="catalog/:catalogName" element={<Catalog />} />





















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

<Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />


        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
          
        </Route>
        

     

      </Routes>

      

    </div>
  
  );
}

export default App;
