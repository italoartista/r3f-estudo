"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function HelloWorld() {
  const textRef = useRef<THREE.Mesh>(null!)

  useFrame((state, delta) => {
    textRef.current.rotation.y += delta * 0.5
  })

  return (
    <Text3D
      ref={textRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.75}
      height={0.2}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
    >
      Hello World
      <meshNormalMaterial />
    </Text3D>
  )
}

export default function HelloWorldScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <HelloWorld />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

