//Module imports
import React from "react";

//CSS imports
import '../Styles/MainLayout.css';

//Picture import
const logo =require('../Pictures/crow.png');

const NavigationBar = () => {
    return (
        <div>
            <div className={"Logo"}>
                <img src={logo} alt={"Logo"}/>
            </div>
        <nav className={"NavigationBar"}>
            <div className={"NavPicture"}>

            </div>
            <div className={"NavList"}>
                <ul>
                    <li><b>Home</b></li>
                    <li>League Bingo</li>
                    <li>Summoner Statistics</li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default NavigationBar;