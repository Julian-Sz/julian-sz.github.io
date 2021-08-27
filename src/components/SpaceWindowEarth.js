import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import earthJPG from "../textures/earth-compressed.jpg";

export default function SpaceWindowEarth(props) {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += Math.random() * 0.01;
  });

  const textureEarth = useLoader(TextureLoader, earthJPG);

  return (
    <mesh castShadow position={props.position} ref={mesh} s>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 20, 20]} />
      <meshStandardMaterial map={textureEarth} attach="material" />
    </mesh>
  );
}
