"use client";
import React, { useEffect, useRef} from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import Mesh from "./Mesh";

export default function Canvas() {
  const cameraRef = useRef();

  useEffect(() => {
    if (cameraRef.current) {
      // Point the camera directly at the center of the mesh
      cameraRef?.current?.lookAt(0, 0, 0);
    }
  }, []);
  return (
    <div className="bg-gradient-main h-full">
    <ThreeCanvas gl={{ alpha: true }} shadows camera={{ position: [10, 6, 10], fov: 50, ref: cameraRef }} style={{ background: 'transparent' }}>
    <ambientLight intensity={1} />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={2}
        castShadow
        // Shadow configurations
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Mesh position={[2,0,0]}/>
      <Mesh position={[0, -2, 0]}/>
    </ThreeCanvas>
    </div>
  );
}
