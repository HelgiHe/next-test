import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const Base = ({ position }) => {
  const gltf = useLoader(GLTFLoader, '/base.glb');
  return <primitive position={position} object={gltf.scene} />;
};
