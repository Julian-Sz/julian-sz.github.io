import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import earthJPG from "../textures/earth.jpg";

export default function SpaceWindowEarth(props) {
  const mesh = useRef(null);

  useFrame(() => {
    mesh.current.rotation.y += Math.random() * 0.01;
  });

  const textureEarth = useLoader(TextureLoader, earthJPG);

  return (
    <mesh castShadow position={props.position} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 15, 15]} />
      <meshBasicMaterial map={textureEarth} attach="material" />
    </mesh>
  );
}
