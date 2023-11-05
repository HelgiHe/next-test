'use client'

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere as BaseSphere } from '@react-three/drei';

interface Rotation {
  x: number;
  y: number;
}

const Sphere: React.FC = () => {
  const [rotation, setRotation] = React.useState<Rotation>({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    setRotation({ x: -y * Math.PI, y: x * Math.PI });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Canvas onCreated={({ gl }) => gl.setClearColor('white')}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      
      <BaseSphere
        args={[1, 32, 32]} // radius, widthSegments, heightSegments
        rotation={[rotation.x, rotation.y, 0]}
      >
        <meshStandardMaterial color="royalblue" />
      </BaseSphere>
    </Canvas>
  );
};

export default Sphere;
