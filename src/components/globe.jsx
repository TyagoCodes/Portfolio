"use client";

import createGlobe from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

import { twMerge } from "tailwind-merge";

const MOVEMENT_DAMPING = 1400;

const GLOBE_CONFIG = {
    width: 800,
    height: 800,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 1,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        { location: [45.5019, -73.5674], size: 0.07 }, // Montreal
        { location: [40.7128, -74.0060], size: 0.1 },  // New York
        { location: [34.0522, -118.2437], size: 0.09 }, // Los Angeles
        { location: [40.4168, -3.7038], size: 0.07 },   // Madrid
        { location: [37.5665, 126.9780], size: 0.08 },  // Seoul, Korea
        { location: [35.6895, 139.6917], size: 0.08 },  // Tokyo, Japan
        { location: [39.9042, 116.4074], size: 0.08 },  // Beijing, China
        { location: [4.7110, -74.0721], size: 0.07 },   // Bogotá, Colombia
        { location: [41.3851, 2.1734], size: 0.07 },    // Barcelona
    ],
};

export function Globe({ className, config = GLOBE_CONFIG }) {
    let phi = 0;
    let width = 0;
    const canvasRef = useRef(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);

    const r = useMotionValue(0);
    const rs = useSpring(r, {
        mass: 1,
        damping: 30,
        stiffness: 100,
    });

    const updatePointerInteraction = (value) => {
        pointerInteracting.current = value;
        if (canvasRef.current) {
            canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
        }
    };

    const updateMovement = (clientX) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.set(r.get() + delta / MOVEMENT_DAMPING);
        }
    };

    useEffect(() => {
        const onResize = () => {
            if (canvasRef.current) {
                width = canvasRef.current.offsetWidth;
            }
        };

        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            ...config,
            width: width * 2,
            height: width * 2,
            onRender: (state) => {
                if (!pointerInteracting.current) phi += 0.005;
                state.phi = phi + rs.get();
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        setTimeout(() => (canvasRef.current.style.opacity = "1"), 0);
        return () => {
            globe.destroy();
            window.removeEventListener("resize", onResize);
        };
    }, [rs, config]);

    return (
        <div
            className={twMerge(
                "mx-auto aspect-[1/1] w-full max-w-[600px]",
                className
            )}
        >
            <canvas
                className={twMerge(
                    "size-[30rem] opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
                )}
                ref={canvasRef}
                onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX;
                    updatePointerInteraction(e.clientX);
                }}
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}