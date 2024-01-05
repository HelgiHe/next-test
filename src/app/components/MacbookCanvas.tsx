"use client";
import { Canvas } from "@react-three/fiber";
import MacbookExperience from "./ComputerExperience";

export function MacbookCanvas({ url, model }: {url: string, model: string}) {
  return (
    <Canvas
      className="touch-none"
      gl={{ alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <MacbookExperience url={url} model={model} />
    </Canvas>
  );
}
