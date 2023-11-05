// @ts-nocheck

"use client"

import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import * as THREE from 'three';

const Polyhedron = forwardRef((props, parentRef) => {
  const localRef = useRef();

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

Polyhedron.displayName = 'Polyhedron';

export { Polyhedron };