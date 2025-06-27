//Import modules
import react from "react";

//Import components
import ProjectPart from "./ProjectPart";

//Stylesheet
import '../../Styles/ProjectPartInformation.css';


const ProjectPartInformation = () => {

    const [ChosenPart, setChosenPart] = react.useState<string>("Iteration 1");

    return (
        <div className="ProjectPartInformation">
            <div className={"PartChoice"}>
                <form>
                    <select
                        id={"choice"}
                        name={"choice"}
                        value={ChosenPart}
                        defaultValue={"Iteration1"}
                        onChange={(e) => setChosenPart(e.target.value)}
                    >
                        <option value={"Iteration1"}> Iteration 1</option>
                        <option value={"Iteration2"}> Iteration 2</option>
                    </select>
                </form>
            </div>
            {ChosenPart==="Iteration1" ? <ProjectPart/>:null}

        </div>
    );
}

export default ProjectPartInformation;