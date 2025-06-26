//Module imports
import React from "react";
import { Outlet } from "react-router-dom";

//Component imports
import NavigationBar from "./NavigationBar";
import PageFooter from "./PageFooter";


const MainLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <main style={{minHeight:"100vh"}}>
                <Outlet/>
            </main>
            <PageFooter/>

        </div>
    )
}

export default MainLayout;