"use client"

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Torus, Text, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function AnimatedTorusScene() {
  const torusRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.5
      torusRef.current.rotation.y += delta * 0.7
    }
  })

  return (
    <>
      <Torus args={[1, 0.4, 16, 100]} ref={torusRef}>
        <meshNormalMaterial />
      </Torus>
      <Text
        position={[0, 0, 2]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      
      >
        ITALO ADLER - Fullstack Engineer
      </Text>
      <OrbitControls />
    </>
  )
}

export default function AnimatedTorus() {
  return (
    <Canvas data-cy='animated-torus' camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedTorusScene />
    </Canvas>
  )
}

