"use client";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import Mesh from "./Mesh";

export default function Canvas() {
  return (
    <ThreeCanvas onCreated={({ gl }) => gl.setClearColor("white")}>
      <Mesh />
    </ThreeCanvas>
  );
}
