"use client"

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const Polyhedron = forwardRef((props, parentRef) => {
  const localRef = useRef();

  // useFrame((_, delta) => {
  //   if (localRef.current) {
  //     localRef.current.rotation.x += 0.2 * delta;
  //     localRef.current.rotation.y += 0.05 * delta;
  //   }
  // });

  const threeColor = new THREE.Color(props.color);

  // This function makes certain values from your component available to the parent component
  useImperativeHandle(parentRef, () => ({
    getRotation: () => {
      if (localRef.current) {
        // return localRef.current.rotation;
      }
    },
    // Add more functions here as needed
  }));

  return (
    <mesh {...props} ref={localRef}>
      <meshNormalMaterial color={threeColor} flatShading={true} />
      <icosahedronGeometry args={[0.5, 1]} />
    </mesh>
  );
});

export default Polyhedron;
