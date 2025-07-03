import {myProjects} from "../constants/index.js";
import Project from "../components/Project.jsx"
import {motion, useMotionValue, useSpring} from 'motion/react'
import {useState} from "react";

const Projects = ({id}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, {damping: 10, stiffness: 50})
    const springY = useSpring(y, {damping: 10, stiffness: 50})
    const handleMouseMove=(e)=>{
        x.set(e.clientX + 20)
        y.set(e.clientY + 20)
    }
    const [preview, setPreview] = useState(null)
    return(
        <section
            onMouseMove={handleMouseMove}
            className={"relative c-space section-spacing"}
            id={id}
        >
            <h2 className={"text-heading"}> My selected Projects</h2>
            <div className={"bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full"}> </div>
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview}/>
            ))}
            {preview && (
                <motion.img
                className={"fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"}
                src={preview}
                style={{x:springX, y:springY}}
                />
            )}
        </section>
    )
}

export default Projects;