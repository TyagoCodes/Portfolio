import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { useMediaQuery } from 'react-responsive'

export function Phone(props) {
    const group = useRef()
    const { nodes, materials } = useGLTF('Public/models/phone3d.glb')

    // Detect screen size
    const isMobile = useMediaQuery({ maxWidth: 600 })

    // Adjust scale and position based on screen size
    const modelScale = isMobile ? 1.6 : 1.5
    const modelPosition = isMobile ? [0, -4, 0] : [0, -6.5, 0]

    // Rotation animation
    useFrame((state, delta) => {
        if (group.current) {
            group.current.rotation.y += delta * 0.5
        }
    })

    // Spring for drop-in animation
    const { positionY } = useSpring({
        from: { positionY: 10 },
        to: { positionY: 0 },
        config: { tension: 80, friction: 12, mass: 1.2 },
        delay: 400,
    })

    return (
        <animated.group
            ref={group}
            scale={modelScale}
            position-x={modelPosition[0]}
            position-y={positionY.to(v => v + modelPosition[1])}
            position-z={modelPosition[2]}
            {...props}
            dispose={null}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MobilePhone_Phone_Main_0.geometry}
                    material={materials.Phone_Main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MobilePhone_Phone_Emission_0.geometry}
                    material={materials.Phone_Emission}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MobilePhone_Phone_Alpha_0.geometry}
                    material={materials.Phone_Alpha}
                />
            </group>
        </animated.group>
    )
}

useGLTF.preload('Public/models/phone3d.glb')