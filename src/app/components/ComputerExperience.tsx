"use client"
import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { useMemo } from "react";

export default function MacbookExperience({ url, model }: { url: string, model: string }) {
  const {scene} = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  const copiedScene = useMemo(() => scene.clone(), [scene])

  return (
    <>
      <Environment preset="city" />
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={25}
            color={"white"}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />

          <primitive
            object={copiedScene}
            position-y={-1.2}
            // rotation-x={ 0.13 }
          >
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                className="bg-black, w-[1024px] h-[670px] border-none rounded-2xl"
                src={url}
              />
            </Html>
          </primitive>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
