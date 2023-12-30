// @ts-nocheck
"use client";
import React, { useState, useRef, useTransition } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Polyhedron } from "./Polyhedron";
import {
  AccumulativeShadows,
  RandomizedLight,
  Center,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { easing } from "maath";

import { Base } from "./Base";

function Env() {
  const [preset, setPreset] = useState("apartment");
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message

  return <Environment preset={preset} blur={0.65} />;
}

export default function Mesh({ position = [0,0,0] }) {
  const pivotRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (pivotRef.current) {
      const rotationSpeed = 0.8; // Adjust this value to control the rotation speed
      pivotRef.current.rotation.y +=
        (mouse.x * Math.PI * 2 - pivotRef.current.rotation.y) *
        rotationSpeed *
        0.01;
      pivotRef.current.rotation.x +=
        (-mouse.y * Math.PI * 2 - pivotRef.current.rotation.x) *
        rotationSpeed *
        0.01;
    }
  });

  return (
    <>
    

      <Base position={position} />
      {/* <group ref={pivotRef}>
        <Polyhedron
          ref={sphereRef}
          name="meshNormalMaterial"
          position={[-1, 1, 0]}
          color="#ff0000"
          pivotRef={pivotRef}
        />
      </group> */}
      <AccumulativeShadows
        temporal
        frames={200}
        color="purple"
        colorBlend={0.5}
        opacity={1}
        scale={10}
        alphaTest={0.85}
      >
        <RandomizedLight
          amount={8}
          radius={5}
          ambient={0.5}
          position={[5, 3, 2]}
          bias={0.001}
        />
      </AccumulativeShadows>
      {/* <Env /> */}
    </>
  );
}
