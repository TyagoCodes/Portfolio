import copy from "../../public/assets/copy.svg"
import copyDone from "../../public/assets/copy-done.svg"

import {useState} from "react";
import {motion} from "motion/react"
import {AnimatePresence} from "framer-motion";

const CopyEmailButton = () => {
    const [copied, setCopied] = useState(false);
    const email = "SantiagoCVBusiness@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setCopied(true)

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    return(

    <motion.button
        onClick={copyToClipboard}
        whileHover={{y: -5}}
        whileTap={{scale: 1.05}}
        className={"relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"}
    >
        <AnimatePresence>
        {copied? (
            <motion.p
                className={"flex items-center justify-center gap-2"}
                key={"copied"}
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.1, ease: "easeInOut"}}
            >
                <img src={copyDone} className={"w-5 "} alt={"Copy icon done"}/>
                Email has been Copied
            </motion.p>
        ) : (
            <motion.p
                className={"flex items-center justify-center gap-2"}
                key={"copy"}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.1}}
            >
                <img src={copy} className={"w-5"} alt={"copy icon"}/>
                Copy Email Address
            </motion.p>
        )}
    </AnimatePresence>
    </motion.button>
    )
}

export default CopyEmailButton;