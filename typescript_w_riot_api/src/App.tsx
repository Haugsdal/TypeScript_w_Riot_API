import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Route path={"/"} element={<Home />} />
    </BrowserRouter>
  );
}

export default App;
