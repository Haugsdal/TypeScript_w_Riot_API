//Modules etc.
import React from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from "react-router-dom";

//Layout imports
import MainLayout from "./Layout/MainLayout";

//Page imports
import Home from "./Pages/Home";
import Bingo from "./Pages/Bingo";
import AnnoyingStatistics from "./Pages/AnnoyingStatistics";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<MainLayout />}>
                <Route path={"/"} element={<Home />} />
                <Route path={"/bingo"} element={<Bingo />} />
                <Route path={"/AnnoyingStatistics"} element={<AnnoyingStatistics />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
