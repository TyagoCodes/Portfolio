import {OrbitingCircles} from "./OrbitingCircles.jsx";


export function Frameworks() {
    const skills = [
        "swift.png",
        "js.png",
        "node.png",
        "kotlin.png",
        "typescript.png",
        "git.svg",
        "github.svg",
        "gradle.svg",
        "docker.svg",
        "sql.png",
        "bash.png",
        "androidstudio.svg",
        "ionic.svg",
        "react.png",
        "tailwind.png",
        "css.png",
        "html.png",
        "figma.png",
        "vite.svg",
    ]
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center overflow-hidden">

            <OrbitingCircles
                iconSize={40}
            >
                {skills.map((skill, index) => (
                    <Icon Key={index} src={`../../Public/assets/logos/${skill}`}/>
                ))}
            </OrbitingCircles>

            <OrbitingCircles
                iconSize={26}
                radius={100}
                reverse speed={2}
            >
                {skills.reverse().map((skill, index) => (
                    <Icon Key={index} src={`../../Public/assets/logos/${skill}`}/>
                ))}
            </OrbitingCircles>

        </div>
    );
}

const Icon=({src}) => (
    <img src={src} className={"duration-200 rounded-sm hover:scale-110"} alt={"rotatingIcons"}/>
)