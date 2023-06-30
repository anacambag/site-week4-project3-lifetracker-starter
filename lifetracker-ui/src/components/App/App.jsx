import "./App.css";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import LoginPage from "../LoginPage/LoginPage";
import RegistrationPage from "../RegistrationPage/RegistrationPage";
import ActivityPage from "../ActivityPage/ActivityPage";
import { useState } from "react"
import ExercisePage from "../ExercisePage/ExercisePage";

export default function App() {
  const [appState, setAppState] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn= {setIsLoggedIn} setAppState={setAppState}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage setAppState={setAppState} setIsLoggedIn= {setIsLoggedIn}/>} />
         <Route path="/register" element={<RegistrationPage setAppState={setAppState} setIsLoggedIn= {setIsLoggedIn}/>} />
          <Route path="/activity" element={<ActivityPage appState={appState} isLoggedIn = {isLoggedIn}/>} /> 
          <Route path="/exercise" element={<ExercisePage />} />  
          {/* <Route path="/nutrition/*" element={<NutritionPage />} />
          <Route path="/nutrition/*" element={<AccessForbidden />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
