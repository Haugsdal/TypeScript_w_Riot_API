//Module imports
import react from "react";

//Stylesheet import

const BingoHeader: React.FC = () => {
    const [difficulty, setDifficulty] = react.useState<string>("Normal");
    return (
        <div className="BingoHeader">
            <div className={"BingoTitle"}>
                <h1>
                    League Match Bingo!
                </h1>
                <p>Difficulty: {difficulty}</p>
            </div>
        </div>
    );
}

export default BingoHeader;