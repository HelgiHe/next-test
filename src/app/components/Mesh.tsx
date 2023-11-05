// Mesh Component
"use client";
import React, { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import Polyhedron from "./Polyhedron";
import { Html, OrbitControls } from "@react-three/drei";

export default function Mesh() {
  const pivotRef = useRef();
  const sphereRef = useRef();

  const { mouse } = useThree();


  useFrame(() => {
    if (pivotRef.current) {
      const rotationSpeed = 0.8; // Adjust this value to control the rotation speed
      pivotRef.current.rotation.y += (mouse.x * Math.PI * 2 - pivotRef.current.rotation.y) * rotationSpeed * 0.01;
      pivotRef.current.rotation.x += (-mouse.y * Math.PI * 2 - pivotRef.current.rotation.x) * rotationSpeed * 0.01;
    }
  });

  return (
    <>
      <directionalLight position={[1, 1, 1]} />
      <group ref={pivotRef}>
        <Polyhedron
          ref={sphereRef}
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          color="#ff0000"
          pivotRef={pivotRef}
        />
      </group>
      <OrbitControls target-y={1} />
    </>
  );
}
