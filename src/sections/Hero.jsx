import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";
import {Canvas} from "@react-three/fiber";
import {Phone} from "../components/Phone.jsx";
import {OrbitControls} from "@react-three/drei";
import {useMediaQuery} from "react-responsive";
import {px} from "motion";

const Hero = ({id}) => {
    const isMobile = useMediaQuery({maxWidth: 853 });

    return <section
        id={id}
        className={"flex items-start justify-center md:items-start md-justify-start min-h-screen overflow-hidden c-space"}
    >
        <HeroText/>
        <ParallaxBackground/>
        <figure
            className={"absolute inset-0 pointer-events-none"}
            style={{ width: [500, px], height: [500, px]}}
        >
            <Canvas camera =  {{ position: [20, 1, 20]}}>
                <group>
                    <Phone />
                </group>

            </Canvas>
        </figure>
    </section>;
};

export default Hero;