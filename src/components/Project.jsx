import React, {useState} from 'react'
import arrowRight from "../../public/assets/arrow-right.svg"
import ProjectDetails from "./ProjectDetails.jsx";

const Project = ({title, description, subDescription, href, image, tags, setPreview}) => {
        const [isHidden, setIsHidden] = useState(false)
    return (
    <>
        <div
            className={"flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"}
            onMouseEnter={()=>setPreview(image)}
            onMouseLeave={()=>setPreview(null)}
        >
            <div>
                <p className={"text-2xl"}> {title} </p>
                <div className={"flex gap-5 mt-2 text-sand"}>
                    {tags.map((tag) => (
                        <span key={tag.id}>{tag.name}</span>
                    ))}
                </div>
            </div>
            <button onClick={() => setIsHidden(true)} className={"flex items-center gap-1 cursor-pointer hover-animation"}>
                Read More
                <img src={arrowRight} className={"w-5"}  alt={"arrow"}/>
            </button>
        </div>
        <div className={"bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full "}/>
        {isHidden && (<ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            closeModal={() => setIsHidden(false)}
            />
        )}
    </>
    )

}

export default Project;