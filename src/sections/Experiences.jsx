import {Timeline} from "../components/Timeline.jsx";
import {experiences} from "../constants/index.js";

const Experiences = ({id}) => {
    return(
        <div className={"w-full"} id={id}>
            <Timeline data={experiences}/>
        </div>
    )
}

export default Experiences;