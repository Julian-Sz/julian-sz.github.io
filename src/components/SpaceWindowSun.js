import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import sunJPG from "../textures/sun.jpg";

export default function SpaceWindowSun(props) {
  const mesh = useRef(null);

  // useFrame(() => {
  //   mesh.current.rotation.y += Math.random() * 0.01;
  // });

  const textureSun = useLoader(TextureLoader, sunJPG);

  return (
    <mesh position={props.position} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 15, 15]} />
      <meshBasicMaterial map={textureSun} attach="material" />
      <pointLight
        color={0xfff6db}
        intensity={2}
        position={[0, 0, 0]}
        castShadow
      ></pointLight>
    </mesh>
  );
}
