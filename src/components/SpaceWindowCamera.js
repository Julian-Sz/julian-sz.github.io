import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

export default function SpaceWindowMoon(props) {
  const outerMesh = useRef(null);

  const width = window.innerWidth;
  const height = window.innerHeight;

  useFrame(() => {
    outerMesh.current.rotation.y -= 0.002;
  });

  return (
    <mesh position={[0, 0, 0]} ref={outerMesh}>
      <mesh position={[0, 8, 20]}>
        <PerspectiveCamera
          makeDefault
          rotation-x={-0.3}
          fov={75}
          aspect={width / height}
          near={1}
          far={2500}
          visible={false}
        />
      </mesh>
    </mesh>
  );
}
