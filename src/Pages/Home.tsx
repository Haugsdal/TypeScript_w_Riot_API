//Module imports
import react from "react";

//Component imports
import VisionAndGoal from "../Components/VisionAndGoal/VisionAndGoal";


//Stylesheet
import '../Styles/HomePage.css';

const Home = () => {
    return (
        <div className={"HomeWrapper"}>
            <div className={"HomeMargin"}></div>
            <div className={"HomeFeed"}>
                <VisionAndGoal/>
                {/*Project vision and goals Component*/}
                {/*Project Part Component*/}
            </div>
            <div className={"HomeMargin"}></div>
        </div>
    )
}

export default Home;