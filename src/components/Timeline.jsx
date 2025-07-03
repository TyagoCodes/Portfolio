"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(500);


    useEffect(() => {
        if (!ref.current) return;

        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setHeight(entry.contentRect.height);
            }
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="c-space section-spacing" ref={containerRef}>
            <h2 className="text-heading">My Life Experiences</h2>

            <div ref={ref} className="relative pb-20">
                <div
                    style={{
                        height: `${height}px`,
                    }}
                    className="absolute left-1 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-700 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-400 via-lavender/50 to-transparent rounded-full"
                    />
                </div>

                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col md:flex-row justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
                            <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
                            </div>
                            <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                                <h3>{item.date}</h3>
                                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
                            </div>
                        </div>

                        <div className="relative w-full pl-20 pr-4 md:pl-4">
                            <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden">
                                <h3>{item.date}</h3>
                                <h3>{item.job}</h3>
                            </div>
                            {item.contents.map((content, i) => (
                                <p className="mb-3 font-normal text-neutral-400" key={i}>
                                    {content}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};