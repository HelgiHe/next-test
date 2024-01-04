"use client";
import { Canvas as ThreeCanvas, useThree } from "@react-three/fiber";
import Experience from "./Experience";

export default function Canvas() {

  return (
    <div className="bg-gradient-main h-full">
    <ThreeCanvas
     flat
     camera={ {
         fov: 45,
         near: 0.1,
         far: 50,
         position: [ 1.719, 0.0484, 3.4263 ]
     } }
 >
     <color args={ [ '#030202' ] } attach="background" />
     <Experience />

    </ThreeCanvas>
    </div>
  );
}

