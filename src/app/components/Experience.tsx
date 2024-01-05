// @ts-nocheck

import { useState } from "react";
import {
  Sparkles,
  Center,
  useTexture,
  useGLTF,
} from "@react-three/drei";

const lightOnColor = "#ffffe5";
const lightOffColor = "#5D5A60";

export default function Experience() {
  const [poleLightAColor, setPoleLightAColor] = useState(lightOnColor);
  const [poleLightBColor, setPoleLightBColor] = useState(lightOnColor);
  
  const { nodes } = useGLTF("./model/portal.glb");

  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;

  const toggleColor = (light) => {
    const newColor =
      light === "A"
        ? poleLightAColor === lightOffColor
          ? lightOnColor
          : lightOffColor
        : poleLightBColor === lightOffColor
        ? lightOnColor
        : lightOffColor;

    if (light === "A") {
      setPoleLightAColor(newColor);
    } else {
      setPoleLightBColor(newColor);
    }
  };

  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
          onClick={() => toggleColor("A")}
        >
          <meshBasicMaterial color={poleLightAColor} />
        </mesh>

        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
          onClick={() => toggleColor("B")}
        >
          <meshBasicMaterial color={poleLightBColor} />
        </mesh>

        <Sparkles
          size={2}
          scale={[4, 2, 4]}
          position-y={1}
          speed={0.1}
          count={20}
        />
      </Center>
    </>
  );
}
