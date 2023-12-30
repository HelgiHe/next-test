import { useRef } from "react";
import { useThree } from "@react-three/fiber";

export const Square = ({ color, size = 10, thickness = 0.1 }) => {
    const meshRef = useRef();
    const { viewport } = useThree();
  
    return (
      <mesh ref={meshRef} position={[0, -1, 0]}>
        <boxGeometry args={[viewport.width * size, thickness, viewport.width * size]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };
