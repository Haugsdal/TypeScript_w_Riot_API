//Module imports
import react from "react";

//Stylesheet
import '../Styles/HomePage.css';

//Component imports
import VisionAndGoal from "../Components/VisionAndGoal/VisionAndGoal";
import ProjectPartInformation from "../Components/ProjectPart/ProjectPartInformation";

//Picture imports
const background =require('../Pictures/background.jpg');

const Home = () => {

    return (
        <div>
            <div className={"backgroundPicture"}>
                <img src={background} alt={"Logo"}/>
            </div>
            <div className={"HomeWrapper"}>
                <div className={"HomeMargin"}></div>
                <div className={"HomeFeed"}>
                    <div>
                        <VisionAndGoal/>
                        <div className={"HomeComponentDivider"}></div>
                        <ProjectPartInformation/>
                    </div>
                </div>
                <div className={"HomeMargin"}></div>
            </div>
        </div>
            )
}

export default Home;