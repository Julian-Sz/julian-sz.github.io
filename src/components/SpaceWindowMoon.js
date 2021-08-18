import React, { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { useLoader, useFrame } from "@react-three/fiber";
import moonJPG from "../textures/moon.jpg";

export default function SpaceWindowMoon(props) {
  const meshWrapper1 = useRef(null);
  const meshWrapper2 = useRef(null);
  const meshInside = useRef(null);

  useFrame(() => {
    meshWrapper2.current.rotation.y += 0.005;
    meshInside.current.rotation.y += 0.001;
  });

  const textureMoon = useLoader(TextureLoader, moonJPG);
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[0, -Math.PI / 4, 0.1]}
      ref={meshWrapper1}
    >
      <mesh position={[0, 0, 0]} ref={meshWrapper2}>
        <mesh position={[40, 0, 0]} ref={meshInside}>
          <sphereBufferGeometry
            attach="geometry"
            args={[props.radius, 10, 10]}
            position={props.position}
          />
          <meshStandardMaterial map={textureMoon} attach="material" />
        </mesh>
      </mesh>
      {/* <gridHelper /> */}
    </mesh>
  );
}
