import React, {useState} from "react";
import {motion} from "motion/react";
import menuIcon from '../../public/assets/menu.svg';
import closeIcon from '../../public/assets/close.svg';

function Navigation(){
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <a href="#hero" className="nav-link">Homepage</a>
            </li>
            <li className="nav-li">
                <a href="#about" className="nav-link">About Me</a>
            </li>
            <li className="nav-li">
                <a href="#projects" className="nav-link">My Projects</a>
            </li>
            <li className="nav-li">
                <a href="#experiences" className="nav-link">My Experience</a>
            </li>
            <li className="nav-li">
                <a href="#contact" className="nav-link">Contact</a>
            </li>
        </ul>
    )
}

const Navbar = () => {
        const[isOpen, setIsOpen] = useState(false);
    return (
        <div className={"fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40"}>
            <div className={"mx-auto c-space max-w-7xl"}>
                <div className={"flex items-center justify-between py-2 sm:py-0"}>
                    <a
                        href="/"
                        className={"text-xl font-bold transition-colors text-neutral-400 hover:text-white"}
                    >
                        Santiago
                    </a>
                    <button
                        onClick={()=> setIsOpen(!isOpen)}
                        className={"flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"}
                    >
                            <img
                                src={isOpen? closeIcon : menuIcon}
                                className="w-6 h-6"
                                alt="toggle"/>
                    </button>
                    <nav className={"hidden sm:flex"}>
                        <Navigation/>
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className={"block overflow-hidden text-center sm:hidden"}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{maxHeight: "100vh"}}
                    transition={{duration:1}}
                >
                <nav className={"pb-5"}>
                    <Navigation/>
                </nav>
            </motion.div>
            )}
        </div>
    )
}

export default Navbar;