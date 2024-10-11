import React from "react";
import ReactDOM from "react-dom/client";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    

    <Provider store={store} >
    <BrowserRouter>
    <App />
    <Toaster/>
    
    </BrowserRouter>

    </Provider>
   
  </React.StrictMode>
);
