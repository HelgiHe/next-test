"use client";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import Mesh from "./Mesh";

export default function Canvas() {
  return (
    <div className="bg-gradient-main h-full">
    <ThreeCanvas gl={{ alpha: true }} style={{ background: 'transparent' }}>
      <Mesh />
    </ThreeCanvas>
    </div>
  );
}
