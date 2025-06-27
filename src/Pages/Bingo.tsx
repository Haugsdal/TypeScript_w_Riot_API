//Module imports
import react from "react";

//Component imports
import BingoHeader from "../Components/BingoHeader/BingoHeader";

//Stylesheet
import '../Styles/Bingo.css';

const Bingo = () => {
    return (
        <div>
            <div className={"BingoWrapper"}>
                <div className={"BingoMargin"}></div>
                <div className={"BingoFeed"}>
                    {/*Page title and game difficulty*/}
                    <BingoHeader />
                    <div className={"BingoComponentDivider"}></div>
                    {/*Bingo card*/}
                    {/*Add prediction*/}
                </div>
                <div className={"BingoMargin"}></div>
            </div>
            

        </div>
    );
}

export default Bingo;