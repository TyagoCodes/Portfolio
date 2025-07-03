import React, {useRef} from 'react'

import codingpov from "../../public/assets/codingpov.png"
import swift from "../../public/assets/swift.png"
import kotlin from "../../public/assets/kotlin.png"
import js from "../../public/assets/js.png"
import ts from "../../public/assets/typescript.png"
import node from "../../public/assets/node.png"

import Card from "../components/Card.jsx";
import {Globe} from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import {Frameworks} from "../components/Frameworks.jsx";

const About = ({id}) => {
    const grid2Container = useRef();
    return <section id={id} className={"c-space section-spacing"}>
        <h2 className={"text-heading"}>About Me</h2>
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12"}>
            {/*Grid 1 Intro */}
            <div className={"flex items-end grid-default-color grid-1"}>
                <img src={codingpov}
                       className={"absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"}
                 alt={"Coding Image Pov"}/>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                <div className={"z-10"}>
                    <p className={"headtext"}> Hi, I'm Santiago Camelo (TyagoCodes) </p>
                    <p className={"subtext text-white"}>
                        Over the past 2 years, I’ve immersed myself in mobile/web development — not just learning how
                        to code, but how to think, build, and solve real-world problems. I’m driven by curiosity,
                        creativity, and a desire to make digital experiences that are both useful and meaningful.
                        Every project I take on is a step toward mastering the craft.
                    </p>
                </div>
                <div className={"absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-orange"}/>
            </div>

            {/* Grid 2 Interactive Knowledge*/}
            <div className={"grid-default-color grid-2"}>
                <div ref={grid2Container} className={"flex items-center justify-center w-full h-full"}>
                    <p className={"flex items-end text-5xl text-gray-500 "}>
                        Oh Hello! :)
                    </p>
                    <Card style={{rotate: "75deg", top: "30%", left: "20%"}} text={"MVVM/MVC"} containerRef={grid2Container}/>
                    <Card style={{rotate: "-30deg", top: "60%", left: "45%"}} text={"Responsive UI"} containerRef={grid2Container}/>
                    <Card style={{rotate: "90deg", bottom: "30%", left: "70%"}} text={"Microservices"} containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top: "55%", left: "0%"}} text={"State Management"} containerRef={grid2Container}/>
                    <Card style={{rotate: "20deg", top: "10%", left: "38%"}} text={"Full-Stack Logic"} containerRef={grid2Container}/>
                    <Card style={{rotate: "0deg", top: "40%", left: "50%"}} image={swift} containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top: "70%", left: "25%"}} image={kotlin} containerRef={grid2Container}/>
                    <Card style={{rotate: "45deg", top: "5%", left: "70%"}} image={js} containerRef={grid2Container}/>
                    <Card style={{rotate: "-45deg", top: "5%", left: "10%"}} image={ts} containerRef={grid2Container}/>
                    <Card style={{rotate: "30deg", top: "70%", left: "75%"}} image={node} containerRef={grid2Container}/>
                </div>
            </div>

            {/* Grid 3 Turning Globe */}
            <div className="grid-black-color grid-3">
                <div className="flex flex-row items-center w-full h-full px-6 gap-8 relative z-10">

                    <div className="flex-[2]">
                        <p className="headtext">Time Zone</p>
                        <p>
                            I'm based in Montreal, and open to remote work worldwide!
                        </p>
                    </div>

                    <div className="flex-[1] flex justify-center items-center min-w-[200px] max-w-[300px] h-[300px] shrink-0">
                        <Globe />
                    </div>

                </div>
            </div>

            {/* Grid 4 */}
            <div className={"grid-special-color grid-3"}>
                <div className={"flex flex-col items-center justify-center gap-4 size-full"}>
                    <p className={"text-center headtext"}>Do you want to get in touch? </p>
                    <CopyEmailButton/>
                </div>
            </div>

            {/* Grid 5 */}
            <div className={"grid-default-color grid-3"}>
                <div className={"z-10 w-[50%]"}>
                    <p className={"headtext"}>Tech Stack</p>
                    <p className={"subtext"}>
                        I’m proficient in multiple languages, frameworks, and technologies that enable
                        me to develop reliable and scalable applications.
                    </p>
                </div>
                <div className={"absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125"}>
                    <Frameworks/>
                </div>
            </div>

        </div>
    </section>
};

export default About;

