//Module imports
import React from "react";
import { Link } from "react-router-dom";

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
                    <li><Link to={"/"}><b>Home</b></Link></li>
                    <li><Link to={"/bingo"}>League Bingo</Link></li>
                    <li><Link to={"AnnoyingStatistics"}>Summoner Statistics</Link></li>
                </ul>
            </div>
        </nav>
        </div>
    );
}

export default NavigationBar;