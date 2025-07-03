import React from 'react';
import skyBg from '../../public/assets/sky.png';
import planes from '../../public/assets/planes.png';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParallaxBackground = () => {
    const { scrollYProgress } = useScroll();

    const springY = useSpring(scrollYProgress, {
        damping: 20,
        stiffness: 100,
    });

    const planesbg = useTransform(springY, [0, 0.5], ["0%", "50%"]);

    return (
        <section className="absolute inset-0 bg-black/40">
            <div className="relative h-screen overflow-y-hidden">
                {/* BG SKY */}
                <motion.div
                    className="absolute inset-0 w-full h-screen -z-50"
                    style={{
                        backgroundImage: `url(${skyBg})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />
                {/* Animated PLANES */}
                <motion.div
                    className="absolute inset-0 -z-10 w-275 h-275 translate-y-30"
                    style={{
                        y: planesbg,
                        backgroundImage: `url(${planes})`,
                        backgroundPosition: "bottom",
                        backgroundSize: "cover",
                    }}
                />
            </div>
        </section>
    );
};

export default ParallaxBackground;